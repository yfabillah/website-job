import React, { useEffect, useState } from "react";
import axios from "axios";
import Layout from "../components/Layout/Layout";
import PrimaryButton from "../components/buttons/PrimaryButton";

const useGetJobs = (params) => {
    const [state, setState] = useState({
        data: null,
        isLoading: false,
        isSuccess: false,
        isError: false,
        error: null,
        isFetching: false,
    });

    const fetch = async () => {
        setState((prev) => ({
            ...prev,
            isLoading: true,
        }));

        await axios
            .get("https://dev-example.sanbercloud.com/api/job-vacancy", { params })
            .then((res) => {
                setState((prev) => ({
                    ...prev,
                    isLoading: false,
                    isSuccess: true,
                    isError: false,
                    isFetching: false,
                    data: res.data,
                }));
            })
            .catch((err) => {
                setState((prev) => ({
                    ...prev,
                    isLoading: false,
                    isSuccess: false,
                    isError: true,
                    isFetching: false,
                    error: err.message,
                }));
            });
    };

    useEffect(() => {
        fetch();
    }, []);

    const { data, isLoading, isSuccess, isError, error, isFetching } = state;

    return { data, isLoading, isSuccess, isError, error };
};

const Lowongan = () => {
    const [search, setSearch] = useState("")

    const { data, isLoading, isError, error } = useGetJobs({
        page: 1,
        per_page: 2,
    });

    if (isLoading) {
        return <>Loading...</>;
    }

    if (isError) {
        return <>{error}</>;
    }

    return (
        <Layout>
            <section className="relative bg-primary pt-[140px] bg-opacity-5 pb-44">
                <div className="flex justify-end pb-32 mr-72">
                    <input className="appearance-none border-2 border-gray rounded-xl w-100 py-2 px-4 text-black leading-tight focus:outline-none focus:bg-white focus:border-primary" type="text" placeholder="search"
                        onChange={(e) => setSearch(e.target.value)} />
                </div>
                <div className="container grid grid-cols-1 md:grid-cols-3 place-items-center mx-auto gap-8">
                    {!data !== null && data?.data.filter((res) => {
                        if (search === "") {
                            return res
                        } else if (res.title.toLowerCase().includes(search.toLocaleLowerCase())) {
                            return res
                        }

                    }).map((res, index) => {
                        return (
                            <div className="max-w-sm rounded overflow-hidden shadow-lg" key={index}>
                                <img className="object-cover h-52 w-96" src={res.company_image_url} alt="Sunset in the mountains" />
                                <div className="px-6 py-4">
                                    <div className="font-bold text-xl mb-2">{res.title}</div>
                                    <p className="text-gray-700 text-base">
                                        {res.company_name}
                                    </p>
                                    <p className="text-gray-700 text-base">
                                        {res.company_city}
                                    </p>
                                </div>
                                <div className="px-6 pt-10 pb-2">
                                    <span className="inline-block bg-gray rounded-full px-3 py-1 text-sm font-semibold text-black mr-2 mb-2">
                                        Rp. {res.salary_min}
                                    </span>
                                    <span className="inline-block bg-gray rounded-full px-3 py-1 text-sm font-semibold text-black mr-2 mb-2">
                                        {res.job_type}
                                    </span>
                                </div>
                            </div>
                        )
                    })}
                </div>
            </section>
        </Layout>
    );
};

export default Lowongan;

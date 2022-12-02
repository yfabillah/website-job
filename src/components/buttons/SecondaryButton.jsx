import classNames from 'classnames';
import React from 'react';
import PropTypes from 'prop-types';

export default function SecondaryButton({ children, className, onClick, ...props }) {
  return (
    <button onClick={onClick} className={classNames(
      "bg-gray text-black rounded-xl py-3 px-8 font-reguler",
      className
    )}
      {...props}
    >
      {children}
    </button >
  );
}

SecondaryButton.propTypes = {
  children: PropTypes.node.isRequired,
  classNames: PropTypes.string,
  onClick: PropTypes.func
};
import React from 'react';


export default function CardBasicExample(): JSX.Element {
  return (
      <div style={{ border: '1px solid #cdcdcd' }}
        className="block rounded-lg bg-white p-6 shadow-[0_2px_15px_-3px_rgba(0,0,0,0.07),0_10px_20px_-2px_rgba(0,0,0,0.04)] dark:bg-neutral-700">
        <h5
          className="mb-2 text-xl font-medium leading-tight text-neutral-800 dark:text-neutral-50">
          Training
        </h5>
        <p className="mb-4 text-base text-neutral-600 dark:text-neutral-200">
          fgkgf
          <br />
          dfdhfjhfj {''} <span>hfdfdfjdhf</span>
        </p>
        
      </div>
  );
}
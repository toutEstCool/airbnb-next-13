'use client';

import { IPropsMenuItem } from "./IProps";

const MenuItem: React.FC<IPropsMenuItem> = ({ label, onClick }): JSX.Element => {
  return (
    <div className="px-4 py-3 hover:bg-neutral-100 transition font-semibold">
      {label}
    </div>
  )
}

export default MenuItem
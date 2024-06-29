import { Content } from "next/font/google";
import React from "react";

export default function Card(props: any) {
    return (
        <div className="flex-1">
            <div className="flex flex-wrap justify-between items-center gap-4">
                <h3 className="text-xl lg:text-xl font-semibold indicator flex-1">{props.Title}<span className="indicator-item indicator-top indicator-center badge badge-secondary">{props.Niveau}</span></h3>
                <h3 className="text-lg font-semibold text-base-200 flex-1 text-end">
                    {props.Time}
                </h3>
            </div>
            <h3 className="text-md text-base-200">{props.School}</h3>
            <div className="flex justify-between flex-wrap">
                <div>
                    <div className="dropdown dropdown-hover">
                        <div tabIndex={0} role="button" className="btn btn-ghost m-1">{props.Dropdown1}</div>
                        <ul className="dropdown-content menu text-base-100 pl-8">
                            {props.Dropdown1Content.map((content: any, index: any) => (
                                <li key={index} className="whitespace-nowrap">
                                    {content}
                                </li>
                            ))}
                        </ul>
                    </div>
                </div>
                <div>
                    <div className="dropdown dropdown-hover dropdown-bottom dropdown-end">
                        <div tabIndex={0} role="button" className="btn btn-ghost m-1">{props.Dropdown2}</div>
                        <ul className="dropdown-content menu text-base-100 pl-8">
                        {props.Dropdown2Content.map((content: any, index: any) => (
                                <li key={index} className="whitespace-nowrap">
                                    {content}
                                </li>
                            ))}
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    );
}
import React, {Component} from "react";
import {Button} from "primereact/button";
import {useRouter} from "next/router";
import projectsStore from "../../../stores/projectsStore";

const ProjectCard = props => {
    const router = useRouter();
    const handleContinue = () => {
        projectsStore.currentProject = {...props};
        router.push('/releases');
    };

    return (
        <div className="col-12 lg:col-6 xl:col-3">
            <div className="card mb-0 shadow-1">
                <div className="flex justify-content-between">
                    <div>
                        <span className="block text-500 font-medium text-xl">{props.name}</span>

                        <div className="flex justify-content-between mb-2 mt-4">
                            <div style={{ marginRight: "50px" }}>
                                <div className="flex align-items-center justify-content-center bg-gray-300 border-round" style={{ width: '2.5rem', height: '2.5rem' }}>
                                    <i className="pi pi-apple text-black-500 text-xl" />
                                </div>
                                <div className="text-900 font-medium mb-3 text-xl text-center">{props.iOS.length}</div>
                            </div>

                            <div>
                                <div className="flex align-items-center justify-content-center bg-green-100 border-round" style={{ width: '2.5rem', height: '2.5rem' }}>
                                    <i className="pi pi-android text-green-500 text-xl" />
                                </div>
                                <div className="text-900 font-medium mb-3 text-xl text-center">{props.Android.length}</div>
                            </div>
                        </div>
                    </div>
                    <div className="flex justify-content-between">
                        <Button icon="pi pi-trash" className="bg-red-100 border-round mr-3 text-red-500 text-xl" style={{ width: '2.5rem', height: '2.5rem', border: 0 }} />
                        <Button icon="pi pi-arrow-right" className="bg-blue-100 border-round mr-3 text-blue-500 text-xl" style={{ width: '2.5rem', height: '2.5rem', border: 0 }} onClick={handleContinue} />
                    </div>
                </div>

                <span className="text-yellow-500 font-medium">Created on </span>
                <span className="text-500">{props.date}</span>
            </div>
        </div>
    );
}

export default ProjectCard;
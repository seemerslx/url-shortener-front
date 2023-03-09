import axios, { AxiosResponse } from "axios";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { urlDTO } from "../../models/url.model";
import { urlShortUrl } from "../../utils/enpoints";
import Loading from "../UI/Loading";
import "./UrlDetails.css";

const UrlDetails = () => {
    const { id } = useParams();
    const [url, setUrl] = useState<urlDTO>();
    useEffect(() => {
        console.log("MAKING AN RESPOSNE");
        axios.get(`${urlShortUrl}/${id}`)
            .then((response: AxiosResponse<urlDTO>) => {
                setUrl(response.data);
            });
    }, [id]);

    return <>
        <div className="url-details">
            {url ?
                <div className="url-details-card card">
                    <div className="card-header text-center">
                        Url info
                    </div>
                    <div className="card-body">
                        <div className="url-details-card-field m-3">
                            <span>Url: <a href={`${url?.url}`}>{`${url?.url}`}</a></span>
                        </div>
                        <div className="url-details-card-field m-3">
                            <span>Short Url: <a href={`${url?.shortUrl}`}>{`${url?.shortUrl}`}</a></span>
                        </div>
                        <div className="m-3">
                        </div>
                    </div>
                </div> : <Loading />}
        </div>
    </>
};

export default UrlDetails;
import { useLoaderData } from "react-router";

import BigCard from "../UI/BigCard";


export default function ProductPage() {
    const id = useLoaderData();
    return (
        <BigCard id={id}/>
    )
}
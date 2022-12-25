import React from "react";
import { useRouter } from "next/router";

const slug = () => {
const router = useRouter();
const {slug} = router.query;
return <>
<div><h1>HI</h1>{slug}</div>
</>
};

export default slug;
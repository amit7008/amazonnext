import React from "react";
import Image from "next/image";
import { useRouter } from "next/router";
import Link from "next/link";
import Pageheader from "../../component/Pageheader";

const slug = () =>{
    const router = useRouter();
    const {slug} = router.query;
    return( 
    <>
      <Pageheader title={slug} />

<div>{slug}</div></>
    )
}

export default slug;
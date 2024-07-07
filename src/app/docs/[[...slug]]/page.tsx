import React from "react";

// by defining only 1 file we have achieved nested dynamic routing.
//  for /docs 404 error page now [[...slug]] it will show docs
//  catch all segments 

const Docs = ({
  params,
}: {
  params: {
    slug: string[];
  };
}) => {
  if (params.slug?.length === 2) {
    return (
      <div>
        Doc {params?.slug[0]} - {params?.slug[1]}
      </div>
    );
  } else if (params.slug?.length === 1) {
    return <div>Doc {params?.slug[0]}</div>;
  }
  return (
    <>
      <h1> docs</h1>
    </>
  );
};

export default Docs;

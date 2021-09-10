import React from "react";
import Container from "@material-ui/core/Container";
import Typography from "@material-ui/core/Typography";

import Banner from "./Components/Banner";
import Info from "./Components/Info";

const ArticleDetail = (props) => {
  return (
    <>
      <Banner img={props.media} />
      <Container maxWidth="lg">
        <Info title={props.title} by={props.byline} tags={props.des_facet} />
        <Typography variant="body1">{props.abstract}</Typography>
        <a href={props.url} target="_blank" rel="noreferrer">
          Read more
        </a>
      </Container>
    </>
  );
};

export default ArticleDetail;

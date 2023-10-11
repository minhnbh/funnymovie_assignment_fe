import React, { useEffect, useState } from "react";
import { Button, Col, Modal, Row } from "antd";
import {
  Container,
  DetailContainer,
  ItemContainer,
  MovieInfoContainer,
  MovieTitle,
  SharedBy,
  Vote,
  VoteContainer,
} from "./styles";
import {
  LikeOutlined,
  DislikeOutlined,
  PlusSquareTwoTone,
} from "@ant-design/icons";
import { getEmbedLink } from "@utils/movies";
import { SanitizeHtml } from "@app/components";
import { IMovie } from "@interfaces";
import { MovieServices } from "../../services/movie.service";
import { getAuthUser } from "@utils/authStorage";
import { redirect } from "react-router-dom";

const Home: React.FC = () => {
  const [movies, setMovies] = useState<IMovie[]>([]);
  const [selectedMovie, setSelectedMovie] = useState<IMovie | null>(null);
  const authUser = getAuthUser();

  useEffect(() => {
    if (!authUser) {
      redirect("/login");
    }
  }, []);

  useEffect(() => {
    const getMoviesData = async () => {
      const { data } = await MovieServices.getMovies();
      if (data?.data) {
        setMovies(data.data);
      }
    };

    getMoviesData();
  }, []);

  const handleCloseDetail = () => {
    setSelectedMovie(null);
  };

  return (
    <Container>
      {movies.map((movie) => (
        <ItemContainer key={movie._id}>
          <Col span={24} lg={12} xl={10}>
            <SanitizeHtml
              rawHtml={getEmbedLink(movie.url)}
              allowedTags={["iframe"]}
              allowedAttributes={{
                iframe: ["width", "height", "src"],
              }}
            />
          </Col>
          <Col span={24} lg={12} xl={14}>
            <MovieInfoContainer>
              <MovieTitle>{movie.title}</MovieTitle>
              <SharedBy>Shared by: {movie.sharedBy}</SharedBy>
              <VoteContainer>
                <Vote>
                  {movie.like}
                  <LikeOutlined />
                </Vote>
                <Vote>
                  {movie.dislike}
                  <DislikeOutlined />
                </Vote>
              </VoteContainer>
              <b>Description: </b>
              {movie.description}
            </MovieInfoContainer>
            <Row justify="end">
              <Button type="link" onClick={() => setSelectedMovie(movie)}>
                <PlusSquareTwoTone />
                See More
              </Button>
            </Row>
          </Col>
        </ItemContainer>
      ))}
      <Modal
        open={!!selectedMovie}
        title={selectedMovie?.title}
        width="80vw"
        onCancel={handleCloseDetail}
        footer={null}
      >
        <DetailContainer>
          {selectedMovie?.url && (
            <SanitizeHtml
              rawHtml={getEmbedLink(selectedMovie.url)}
              allowedTags={["iframe"]}
              allowedAttributes={{
                iframe: ["width", "height", "src"],
              }}
            />
          )}
          <MovieTitle>{selectedMovie?.title}</MovieTitle>
          <SharedBy>Shared by: {selectedMovie?.sharedBy}</SharedBy>
          <VoteContainer>
            <Vote>
              {selectedMovie?.like}
              <LikeOutlined />
            </Vote>
            <Vote>
              {selectedMovie?.dislike}
              <DislikeOutlined />
            </Vote>
          </VoteContainer>
          <b>Description: </b>
          {selectedMovie?.description}
        </DetailContainer>
      </Modal>
    </Container>
  );
};

export default Home;

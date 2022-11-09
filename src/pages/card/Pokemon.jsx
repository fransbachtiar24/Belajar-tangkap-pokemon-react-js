import axios from "axios";
import React, { useEffect, useState } from "react";
import { Card, Col, Container, Row } from "react-bootstrap";

function Pokemon() {
  const [pokemon, setPokemon] = useState([]);
  const [loading, setLoading] = useState(true);
  const [nextUrl, setNextUrl] = useState();
  const [preUrl, setpretUrl] = useState();
  const [url, setUrl] = useState("https://pokeapi.co/api/v2/pokemon/");

  const pokeHave = async () => {
    setLoading(true);
    const response = await axios.get(url);
    setNextUrl(response.data.next);
    setpretUrl(response.data.previous);
    getDataPokemon(response.data.results);
    setLoading(false);
    console.log(pokemon);
  };

  const getDataPokemon = async (response) => {
    response.map(async (item) => {
      const result = await axios.get(item.url);
      console.log(result.data);
      setPokemon((state) => {
        state = [...state, result.data];
        return state;
      });
    });
  };

  useEffect(() => {
    pokeHave();
  }, [url]);

  return (
    <>
      <Container className="mt-4">
        <Row>
          {loading ? (
            <h1>Loading...</h1>
          ) : (
            pokemon.map((item) => {
              return (
                <>
                  <Col lg={3}>
                    <Card className="mt-3">
                      <img
                        src={item.sprites.front_default}
                        alt="gagal tampil"
                        width="200px"
                        className="text-center"
                      />
                      <Card.Text className="text-center">{item.name}</Card.Text>
                    </Card>
                  </Col>
                </>
              );
            })
          )}
        </Row>
      </Container>
    </>
  );
}

export default Pokemon;

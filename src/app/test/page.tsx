import Link from "next/link";
import "server-only";

import { Button } from "./Button";

export default async function TestPage() {
  const pokemon = await fetch("https://pokeapi.co/api/v2/pokemon").then((res) => res.json());
  return (
    <>
      <h1>
        Hello Testpage<Link href="/">Home</Link>
      </h1>
      <Button>
        <h1>I am in the button {process.env.TEST}</h1>
      </Button>
      <ul>
        {pokemon.results.map((poke: any) => (
          <li key={poke.name}>{poke.name}</li>
        ))}
      </ul>
    </>
  );
}

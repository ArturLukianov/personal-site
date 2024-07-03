import React, { useEffect, useState } from "react";
import GlitchedText from "../GlitchedText/GlitchedText";
import { formatDistanceToNow } from "date-fns";

export default function Comic() {
  const [comic, setComic] = useState(null);

  // Define the email parameter
  const email: string = "a.lukianov@innopolis.university";

  // Create URLSearchParams object to append the email query parameter
  const params: URLSearchParams = new URLSearchParams({ email: email });

  // Fetch the comic ID
  useEffect(() => {
    fetch(`https://fwd.innopolis.university/api/hw2?email=${params.toString()}`)
      .then((response: Response) => response.text())
      .then((data: string) => {
        const comicId: string = data;
        return fetch(
          `https://fwd.innopolis.university/api/comic?id=${comicId}`
        );
      })
      .then((response: Response) => response.json())
      .then(
        (comicData: {
          img: string;
          title: string;
          alt: string;
          year: number;
          month: number;
          day: number;
        }) => {
          // Extract comic details
          const { img, title, alt, year, month, day } = comicData;
          const date: string = new Date(
            year,
            month - 1,
            day
          ).toLocaleDateString();

          // Create elements to display the comic

          const comicDate: Date = new Date(year, month - 1, day);
          const dateString: string = comicDate.toLocaleDateString();
          const fromNow: string = formatDistanceToNow(comicDate, {
            addSuffix: true,
          });

          setComic(
            <div id="xkcd">
              <img src={img} alt={alt} />
              <p>{title}</p>
              <p>
                Published on: {dateString} ({fromNow})
              </p>
            </div>
          );
        }
      );
  }, []);

  return (
    <div className="section">
      <GlitchedText noflick>XKCD</GlitchedText>
      {comic}
    </div>
  );
}

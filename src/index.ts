import './css/style.css';

import { formatDistanceToNow } from 'date-fns';

// Define the email parameter
const email: string = "a.lukianov@innopolis.university";

// Create URLSearchParams object to append the email query parameter
const params: URLSearchParams = new URLSearchParams({ email: email });

// Fetch the comic ID
fetch(`https://fwd.innopolis.university/api/hw2?email=${params.toString()}`)
  .then((response: Response) => response.text())
  .then((data: string) => {
    const comicId: string = data;
    return fetch(`https://fwd.innopolis.university/api/comic?id=${comicId}`);
  })
  .then((response: Response) => response.json())
  .then((comicData: { img: string, title: string, alt: string, year: number, month: number, day: number }) => {
    // Extract comic details
    const { img, title, alt, year, month, day } = comicData;
    const date: string = new Date(year, month - 1, day).toLocaleDateString();

    // Create elements to display the comic
    const comicDiv: HTMLElement | null = document.getElementById("xkcd");


    const comicDate: Date = new Date(year, month - 1, day);
    const dateString: string = comicDate.toLocaleDateString();
    const fromNow: string = formatDistanceToNow(comicDate, { addSuffix: true });

    if (comicDiv) {
      const comicImg: HTMLImageElement = document.createElement("img");
      comicImg.src = img;
      comicImg.alt = alt;

      const comicTitle: HTMLParagraphElement = document.createElement("p");
      comicTitle.textContent = title;

      const comicDateElem: HTMLParagraphElement = document.createElement("p");
      comicDateElem.textContent = `Published on: ${dateString} (${fromNow})`;

      // Append elements to the comicDiv
      comicDiv.appendChild(comicTitle);
      comicDiv.appendChild(comicImg);
      comicDiv.appendChild(comicDateElem);
    } else {
      console.error("Error: Element with id 'xkcd' not found.");
    }
  })
  .catch((error: Error) => console.error("Error:", error));

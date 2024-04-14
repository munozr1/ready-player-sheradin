'use client'
import LeaderBoard from "@/components/LeaderBoard/page";
import ProgressBar from "@/components/ProgressBar/page";
import Image from "next/image";
import { useState, useEffect, useRef } from "react";
import { animate, scroll } from "motion";
import BoxAndWhisker from "@/components/BoxWhisker/page";

export default function Home() {
  const movies =
    [
      { actor: "Tye Sheridan", title: "Ready Player One	", year: 2018, rating: 7.4, "genre": "	sci - fi	", image: "https://musicart.xboxlive.com/7/4ca85000-0000-0000-0000-000000000002/504/image.jpg?w=1920&h=1080	" },
      { actor: "Tye Sheridan", title: "The Tender Bar	", year: 2021, rating: 6.7, "genre": "	drama	", image: "https://m.media-amazon.com/images/M/MV5BMjM2MjhmYmYtN2Q2MS00NGMwLWJmOTEtMmU1MjljNzllZmNkXkEyXkFqcGdeQXVyMjkwOTAyMDU@._V1_.jpg	" },
      { actor: "Tye Sheridan", title: "The Night Clerk	", year: 2020, rating: 5.6, "genre": "	drama	", image: "https://m.media-amazon.com/images/M/MV5BOTY5ZDM0YTYtZDliYy00NTU3LTlkYmUtMWU2ZjRiZGZjOGQ2XkEyXkFqcGdeQXVyNDI3NjU1NzQ@._V1_.jpg	" },
      { actor: "Tye Sheridan", title: "Dark Phoneix	", year: 2019, rating: 5.7, "genre": "	sci - fi	", image: "https://m.media-amazon.com/images/M/MV5BMmZmYTgwZGItNDIxMS00MmRkLWEzODQtYTllNzM0ZWE1NmQ5XkEyXkFqcGdeQXVyODQzNTE3ODc@._V1_.jpg	" },
      { actor: "Tye Sheridan", title: "Last Days in the Desert	", year: 2015, rating: 5.6, "genre": "	drama	", image: "https://m.media-amazon.com/images/I/91EmgtQikkL._AC_UF894,1000_QL80_.jpg	" },
      { actor: "Tye Sheridan", title: "The card counter	", year: 2021, rating: 6.2, "genre": "	sci - fi	", image: "https://m.media-amazon.com/images/M/MV5BNTMyNzQ4MmUtMmJiYy00YjlmLWJiMzktNjc1MGNlMzBjYjhiXkEyXkFqcGdeQXVyMDA4NzMyOA@@._V1_.jpg	" },
      { actor: "Tye Sheridan", title: "Voyagers	", year: 2021, rating: 5.5, "genre": "	sci - fi	", image: "https://resizing.flixster.com/-XZAfHZM39UwaGJIFWKAE8fS0ak=/v3/t/assets/p19665171_v_v9_ah.jpg	" },
      { actor: "Tye Sheridan", title: "Scouts guide to the Zombie apocalypse	", year: 2015, rating: 6.3, "genre": "	comedy	", image: "https://m.media-amazon.com/images/M/MV5BMTY4NjczNjE4OV5BMl5BanBnXkFtZTgwODk0MjQ5NjE@._V1_.jpg	" },
      { actor: "Tye Sheridan", title: "Mud	", year: 2012, rating: 7.4, "genre": "	drama	", image: "https://i.pinimg.com/originals/63/eb/55/63eb5591ff5d13ce8739ed108bd9bbe8.jpg	" },
      { actor: "Tye Sheridan", title: "The stanford prison experiment	", year: 2015, rating: 6.8, "genre": "	drama	", image: "https://resizing.flixster.com/-XZAfHZM39UwaGJIFWKAE8fS0ak=/v3/t/assets/p11572711_p_v10_ab.jpg	" },
      { actor: "Tye Sheridan", title: "Dark places	", year: 2015, rating: 6.2, "genre": "	drama	", image: "https://m.media-amazon.com/images/M/MV5BMTY1NTM4ODYzM15BMl5BanBnXkFtZTgwNTY2NDIwNjE@._V1_.jpg	" },
      { actor: "Tye Sheridan", title: "detour	", year: 2016, rating: 6.2, "genre": "	drama	", image: "https://m.media-amazon.com/images/M/MV5BMTgzNzk0NzMzNV5BMl5BanBnXkFtZTgwMjIyNDc5MzE@._V1_FMjpg_UX1000_.jpg	" },
      { actor: "Tye Sheridan", title: "the mountain	", year: 2018, rating: 5.5, "genre": "	drama	", image: "https://m.media-amazon.com/images/M/MV5BNWZjZWYxYWMtNmU3ZC00YzEyLTljYjYtZGZlZjdiODhkYmI5XkEyXkFqcGdeQXVyMTMxODk2OTU@._V1_.jpg	" },
      { actor: "Tye Sheridan", title: "the yellow bird	", year: 2017, rating: 5.8, "genre": "	drama	", image: "https://m.media-amazon.com/images/M/MV5BY2ExMmI4MTUtNTFmZS00ZjBkLWFjOWEtNjE3MGVkZDQ1ZDZhXkEyXkFqcGdeQXVyNjUzODM0ODI@._V1_.jpg	" },
      { actor: "Tye Sheridan", title: "all summers end	", year: 2017, rating: 6.1, "genre": "	drama	", image: "https://m.media-amazon.com/images/M/MV5BNTI5NDQ1MDU4NF5BMl5BanBnXkFtZTgwNzU0OTU2NTM@._V1_.jpg" },
      { actor: "Tye Sheridan", title: "joe	", year: 2013, rating: 6.8, "genre": "	drama	", image: "https://wildfiremovies.files.wordpress.com/2014/08/joe-movie-poster.jpg" },
      { actor: "Tye Sheridan", title: "entertainment	", year: 2015, rating: 5.7, "genre": "	drama	", image: "https://m.media-amazon.com/images/I/61We+ND7SZL._AC_UF894,1000_QL80_.jpg	" },
      { actor: "Tye Sheridan", title: "the foger	", year: 2014, rating: 5.8, "genre": "	drama	", image: "https://m.media-amazon.com/images/M/MV5BMTQ5NjgxMTE5OF5BMl5BanBnXkFtZTgwNDQwNzY2NDE@._V1_FMjpg_UX1000_.jpg	" },
      { actor: "Tye Sheridan", title: "the tree of life	", year: 2011, rating: 6.8, "genre": "	drama	", image: "https://m.media-amazon.com/images/M/MV5BMTMwNjQ0NjMzN15BMl5BanBnXkFtZTcwNjMxMTkyNA@@._V1_.jpg" },
      { actor: "Tye Sheridan", title: "deadpool ", year: 2018, rating: 7.6, "genre": "	thriller	", image: "https://m.media-amazon.com/images/I/91+od0A3itL._AC_UF1000,1000_QL80_.jpg	" },
      { actor: "Tye Sheridan", title: "asphalt city	", year: 2021, rating: 6.3, "genre": "	thriller	", image: "https://m.media-amazon.com/images/M/MV5BNTg0ODI4OTUtMDNiMi00NDA4LWI3NDAtYjFlNTg1ZDc0ZDY1XkEyXkFqcGdeQXVyMDc5ODIzMw@@._V1_.jpg" },
    ]
    const [players, setPlayers] = useState([
      { name: "Will Smith", score: 6.7 },
      { name: "Tom Holland", score: 6.8 },
      { name: "Tiger Shroff", score: 4.3 },
      { name: "Kartik Aryan", score: 6.4 },
      { name: "Varun Dhavan", score: 5 },
      { name: "Tye Sheridan", score: 0 },
    ]);
    const [ratings, setRatings] = useState([]);
    const [currentSection, setCurrentSection] = useState(null);
    const sectionRefs = useRef([]);


    //function to order players by score
    const organizePlayers = (playersData) => {
      //sort players by score in descending order
      let players = [...playersData].sort((a, b) => b.score - a.score);
      return players;
    }


  const organizeMovies = (moviesData) => {
    //sort  movies by year in ascending order
    let movies = [...moviesData].sort((a, b) => a.year - b.year);

    // Assign index based on sorted order, ensuring it is three characters long
    movies = movies.map((movie, index) => ({
      ...movie,
      index: String(index + 1).padStart(3, '0') // Ensure the index has 3 characters
    }));

    return movies;
  }

  const sortedMovies = organizeMovies(movies);

  useEffect(() => {
    // scroll(animate(".progress", { scaleX: [0, 1] }));
    // Code to run after the component has mounted
    console.log('Component has finished loading');
    document.querySelectorAll("section").forEach((section) => {
      const header = section.querySelector("h2");
      scroll(animate(header, { y: [-400, 400] }), {
        target: header
      });
    });

    return () => {
      // Cleanup code goes here
      console.log('Component will unmount');
    };
  }, []);




  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setCurrentSection(entry.target.id);
          }
        });
      },
      { rootMargin: '0px', threshold: 0.5 } // Trigger if at least 50% of the element is visible
    );

    sectionRefs.current.forEach((section) => {
      if (section) observer.observe(section); // Make sure the section is a DOM element
    });

    return () => {
      sectionRefs.current.forEach((section) => {
        if (section) observer.unobserve(section); // Again, ensure it's a DOM element
      });
    };
  }, []);

  //log the current section when changed
  useEffect(() => {
    console.log(currentSection);
    //when the current section changes, update the ratings to include only up to the current section
    if(currentSection) {
      setRatings(movies.slice(0, parseInt(currentSection.split("-")[1]) + 1).map(movie => movie.rating));
      const avg = (ratings.reduce((acc, curr) => acc + curr, 0) / ratings.length).toPrecision(2);
      let temp = players.map(player => player.name === "Tye Sheridan" ? { name: player.name, score: avg } : player);
      setPlayers(temp);
    }

  }, [currentSection], players);

  return (
    <main className="flex min-h-screen flex-col items-center justify-between">

      <div className="fixed right-20 top-[25vh]">
        <BoxAndWhisker values={ratings}/>
      </div>
      <div className="w-50 h-64 bg-orange-400 bg-opacity-40 fixed right-0 top-[65vh] p-2 rounded-lg border border-orange-400">
        <p>
          A box plot efficiently encapsulates an actors film rating spectrum<br></br>
          , pinpointing their propensity for selecting either highly-rated movies <br></br>
          or a mix, while the Interquartile Range (IQR) sheds light on the consistency <br></br>
          of their performances—with a narrow IQR signifying steadiness in film quality.<br></br> 
          Outliers in the data may signal exceptionally  bold or fortuitous role<br></br>
          choices, inviting a deeper dive into specific career highlights <br></br>
          or deviations. Overall, the box and whisker plot serves as a potent <br></br>
          analytical tool, offering a snapshot of an actors career choices and <br></br>
          performance reliability through the visual distillation of their film ratings.
        </p>
      </div>

      <div className="fixed w-full h-24 top-0 bg-black fadeBottom z-40">
      </div>
      <div className="fixed left-5 top-[25vh]">
        <LeaderBoard players={players}/>
      </div>
      <div className="border border-yellow-400 bg-opacity-40 bg-yellow-400 w-50 h-42 p-2 rounded-lg fixed left-0 top-[50vh]">
        <p>
          The clear hierarchy established through rankings allows for immediate<br></br> 
          comparison and contrast, fostering engagement as viewers track their <br></br>
          favorite actors career progression or discover new talents. Moreover, its<br></br>
           interactivity enables a straightforward narrative of success, encouraging<br></br>
            audiences to delve deeper into the metrics that contribute to an actors<br></br>
             placement. 
        </p>
      </div>
      <div className="fixed top-5 z-50">
        <ProgressBar />
      </div>

      {
        sortedMovies.map((movie, index) => (
          <section key={index} className="relative snap-start flex justify-center items-center h-[100vh]" ref={(el) => sectionRefs.current[index] = el} id={`section-${index}`}>
            <div className="w-[500px] h-[800px] m-[20px] overflow-hidden">
              <img src={movie.image || "https://m.media-amazon.com/images/I/618stJ-jeAL.jpg"} alt={`${movie.title}`} />
              <h2 className="m-0 font-bold text-red-600 text-[50px] absolute " style={{top: 'calc(50%  - 25px)', left: 'calc(50% + 205px)'}}>{`#${movie.index}`}</h2>
            </div>
          </section>
        ))
      }
      
    </main>
  );
}






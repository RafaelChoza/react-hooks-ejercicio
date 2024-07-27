import React, { useState, useEffect } from "react";
import FilteredList from "../FilteredList";
import "./styles.css"

const SearchBox = () => {
    const [songs, setSongs] = useState([]);
    const [searchFiltered, setSearchFiltered] = useState('');

    useEffect(() => {
        const fetchSongs = async () => {
            const response = [
                { id: 1, artist: 'Queen', title: 'Another One Bites the Dust' },
                { id: 2, artist: 'Bon Jovi', title: 'Livin\' on a Prayer' },
                { id: 3, artist: 'Guns N\' Roses', title: 'Sweet Child o\' Mine' },
                { id: 4, artist: 'AC/DC', title: 'Back in Black' },
                { id: 5, artist: 'Journey', title: 'Don\'t Stop Believin\'' },
                { id: 6, artist: 'U2', title: 'With or Without You' },
                { id: 7, artist: 'The Police', title: 'Every Breath You Take' },
                { id: 8, artist: 'Def Leppard', title: 'Pour Some Sugar on Me' },
                { id: 9, artist: 'Van Halen', title: 'Jump' },
                { id: 10, artist: 'Dire Straits', title: 'Money for Nothing' },
                { id: 11, artist: 'Bruce Springsteen', title: 'Born in the U.S.A.' },
                { id: 12, artist: 'Billy Idol', title: 'White Wedding' },
                { id: 13, artist: 'Whitesnake', title: 'Here I Go Again' },
                { id: 14, artist: 'Aerosmith', title: 'Dude (Looks Like a Lady)' },
                { id: 15, artist: 'Motley Crue', title: 'Kickstart My Heart' },
                { id: 16, artist: 'The Clash', title: 'Should I Stay or Should I Go' },
                { id: 17, artist: 'Scorpions', title: 'Rock You Like a Hurricane' },
                { id: 18, artist: 'Ozzy Osbourne', title: 'Crazy Train' },
                { id: 19, artist: 'INXS', title: 'Need You Tonight' },
                { id: 20, artist: 'Talking Heads', title: 'Burning Down the House' },
                { id: 21, artist: 'The Cure', title: 'Just Like Heaven' },
                { id: 22, artist: 'Tears for Fears', title: 'Shout' },
                { id: 23, artist: 'Pat Benatar', title: 'Love Is a Battlefield' },
                { id: 24, artist: 'REO Speedwagon', title: 'Keep On Loving You' },
                { id: 25, artist: 'Foreigner', title: 'I Want to Know What Love Is' },
                { id: 26, artist: 'Billy Joel', title: 'We Didn\'t Start the Fire' },
                { id: 27, artist: 'Phil Collins', title: 'In the Air Tonight' },
                { id: 28, artist: 'Peter Gabriel', title: 'Sledgehammer' },
                { id: 29, artist: 'Duran Duran', title: 'Hungry Like the Wolf' },
                { id: 30, artist: 'The Cars', title: 'Drive' },
                { id: 31, artist: 'David Bowie', title: 'Let\'s Dance' },
                { id: 32, artist: 'Eurythmics', title: 'Sweet Dreams (Are Made of This)' },
                { id: 33, artist: 'The Rolling Stones', title: 'Start Me Up' },
                { id: 34, artist: 'The Bangles', title: 'Walk Like an Egyptian' },
                { id: 35, artist: 'Blondie', title: 'Call Me' },
                { id: 36, artist: 'Red Hot Chili Peppers', title: 'Higher Ground' },
                { id: 37, artist: 'The B-52\'s', title: 'Love Shack' },
                { id: 38, artist: 'R.E.M.', title: 'It\'s the End of the World as We Know It (And I Feel Fine)' },
                { id: 39, artist: 'Simple Minds', title: 'Don\'t You (Forget About Me)' },
                { id: 40, artist: 'Men at Work', title: 'Down Under' },
                { id: 41, artist: 'Cyndi Lauper', title: 'Time After Time' },
                { id: 42, artist: 'Prince', title: 'Purple Rain' },
                { id: 43, artist: 'Genesis', title: 'Land of Confusion' },
                { id: 44, artist: 'Tom Petty and the Heartbreakers', title: 'Free Fallin\'' },
                { id: 45, artist: 'Boston', title: 'Amanda' },
                { id: 46, artist: 'Survivor', title: 'Eye of the Tiger' },
                { id: 47, artist: 'John Mellencamp', title: 'Jack & Diane' },
                { id: 48, artist: 'Poison', title: 'Every Rose Has Its Thorn' },
                { id: 49, artist: 'Joan Jett & the Blackhearts', title: 'I Love Rock \'n Roll' },
                { id: 50, artist: 'Heart', title: 'Alone' },
                { id: 51, artist: 'Bonnie Tyler', title: 'Total Eclipse of the Heart' },
                { id: 52, artist: 'KISS', title: 'I Was Made for Lovin\' You' },
                { id: 53, artist: 'Culture Club', title: 'Karma Chameleon' },
                { id: 54, artist: 'Depeche Mode', title: 'Personal Jesus' },
                { id: 55, artist: 'Robert Palmer', title: 'Addicted to Love' },
                { id: 56, artist: 'ZZ Top', title: 'Legs' },
                { id: 57, artist: 'Eric Clapton', title: 'Cocaine' },
                { id: 58, artist: 'Steve Winwood', title: 'Higher Love' },
                { id: 59, artist: 'Yes', title: 'Owner of a Lonely Heart' },
                { id: 60, artist: 'Rush', title: 'Tom Sawyer' },
                { id: 61, artist: 'Bryan Adams', title: 'Summer of \'69' },
                { id: 62, artist: 'Mr. Mister', title: 'Broken Wings' },
                { id: 63, artist: 'Lionel Richie', title: 'Dancing on the Ceiling' },
                { id: 64, artist: 'Wang Chung', title: 'Everybody Have Fun Tonight' },
                { id: 65, artist: 'A-Ha', title: 'Take on Me' },
                { id: 66, artist: 'Europe', title: 'The Final Countdown' },
                { id: 67, artist: 'Nik Kershaw', title: 'Wouldn\'t It Be Good' },
                { id: 68, artist: 'Kajagoogoo', title: 'Too Shy' },
                { id: 69, artist: 'New Order', title: 'Blue Monday' },
                { id: 70, artist: 'Thompson Twins', title: 'Hold Me Now' },
                { id: 71, artist: 'Howard Jones', title: 'Things Can Only Get Better' },
                { id: 72, artist: 'Frankie Goes to Hollywood', title: 'Relax' },
                { id: 73, artist: 'Soft Cell', title: 'Tainted Love' },
                { id: 74, artist: 'Ultravox', title: 'Dancing with Tears in My Eyes' },
                { id: 75, artist: 'The Human League', title: 'Don\'t You Want Me' },
                { id: 76, artist: 'Spandau Ballet', title: 'True' },
                { id: 77, artist: 'A Flock of Seagulls', title: 'I Ran (So Far Away)' },
                { id: 78, artist: 'Toto', title: 'Africa' },
                { id: 79, artist: 'Hall & Oates', title: 'Out of Touch' },
                { id: 80, artist: 'Squeeze', title: 'Tempted' },
                { id: 81, artist: 'The Romantics', title: 'Talking in Your Sleep' },
                { id: 82, artist: 'Kim Wilde', title: 'Kids in America' },
                { id: 83, artist: 'The Psychedelic Furs', title: 'Love My Way' },
                { id: 84, artist: 'Echo & the Bunnymen', title: 'Lips Like Sugar' },
                { id: 85, artist: 'Talking Heads', title: 'Once in a Lifetime' },
                { id: 86, artist: 'The Smiths', title: 'How Soon Is Now?' },
                { id: 87, artist: 'The Replacements', title: 'I Will Dare' },
                { id: 88, artist: 'The Pretenders', title: 'Brass in Pocket' },
                { id: 89, artist: 'Midnight Oil', title: 'Beds Are Burning' },
                { id: 90, artist: 'The Fixx', title: 'One Thing Leads to Another' },
                { id: 91, artist: 'ABC', title: 'The Look of Love' },
                { id: 92, artist: 'INXS', title: 'New Sensation' },
                { id: 93, artist: 'The Police', title: 'Synchronicity II' },
                { id: 94, artist: 'The Go-Go\'s', title: 'We Got the Beat' },
                { id: 95, artist: 'The Outfield', title: 'Your Love' },
                { id: 96, artist: 'Roxy Music', title: 'More Than This' },
                { id: 97, artist: 'Modern English', title: 'I Melt with You' },
                { id: 98, artist: 'Big Country', title: 'In a Big Country' },
                { id: 99, artist: 'Oingo Boingo', title: 'Dead Man\'s Party' },
                { id: 100, artist: 'The Cure', title: 'Lovesong' },
            ]

            setSongs(response);
        }

        fetchSongs();
    }, []);

    const handleInputChange = (e) => {
        setSearchFiltered(e.target.value);
    }

    const newList = songs.filter(song => song.artist.toLowerCase().includes(searchFiltered.toLowerCase()) || song.title.toLowerCase().includes(searchFiltered.toLowerCase()));

    return (
        <section>
            <h3>Search Box</h3>
            <div>
                <p>Escribe el artista o canción que quieres para filtrarla de la lista</p>
                <input
                    type="input"
                    value={searchFiltered}
                    onChange={handleInputChange}
                    placeholder="type word to search"
                />
                <FilteredList songs={newList} />
            </div>
        </section>
    );
};

export default SearchBox;

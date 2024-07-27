import React, { useState } from "react";

const FilteredList = ({ songs = [] }) => {

        return (
            <>
                
                <h2>Lista de artistas y canciones</h2>
                <ul>
                    {songs.map((song) => (
                        <li key={song.id}>
                            {song.artist} - {song.title}
                        </li>
                    ))}
                </ul>
            </>
            
        )
}

export default FilteredList;
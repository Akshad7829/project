// import React, {useEffect,useState} from 'react';

// import axios from 'axios';

// export default function Contest()  {
// const [notes,getNotes] = useState('');

// const url='https://codeforces.com/api/contest.list?gym=true?phase=BEFORE';

// useEffect(()=>{
//     getAllNotes();
// })

// const getAllNotes=()=>{
//     axios.get(`${url}past`)
//     .then((response)=>{
//         const allNotes=response.data.notes.allNotes;
//         getNotes(allNotes);
//     })
//     .catch(error=>console.log(`Error: ${error}`));
// }
// return (
//     <p notes={notes}></p>
// )

// }
import React, { useState, useTransition } from 'react'

function Index() {

    const [search, setSearch] =useState("");

    const [isPending, startTransition] = useTransition();
   return (
    <div>
        <h2>this is useTransition hook</h2>
        <input type="text" value={search} onChange={(e)=>{
            setSearch(e.target.value);
            startTransition(()=>{
                console.log("searching for:", e.target.value);
            });
        }} />
        {isPending ? <h3>Loading...</h3> : <h3>Search Term: {search}</h3>}
        <p>Type something in the input box to see the transition in action.</p>
        <p>This hook is useful for deferring updates to the UI while keeping the app responsive.</p>
        <p>Try typing quickly to see how the UI remains responsive.</p>
        <p>Note: The transition will only take effect if the input changes frequently.</p>
        <p>Use this hook to manage state updates that can be deferred without blocking the main thread.</p>
        <p>It's particularly useful for large   state updates or complex calculations that don't need to be immediate.</p>
        <p>Remember to import useTransition from React.</p>
        <p>Check the console for the search term being logged.</p>
        <p>Feel free to modify the input value to see how the transition behaves.</p>
        <p>This is a simple example of how to use the useTransition hook in React.</p>
        <p>Enjoy experimenting with this hook!</p>
        <p>Happy coding!</p>
        <p>Make sure to test it in a React application.</p>
        <p>Use this hook to improve user experience by keeping the UI responsive during state updates.</p>
        <p>It's a great way to handle state changes that can be deferred without blocking the UI.</p>
        <p>Try it out in your own projects to see how</p>
    </div>
  )
}

export default Index

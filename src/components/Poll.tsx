function Poll(): JSX.Element {
  // const nameEl: any = null;
  // const rankEl: any = null;
  // const responses = {
  //   1: "Ok",
  //   2: "Nice",
  //   3: "Wow",
  //   4: "Noooo waaaay",
  // };

  return (
    <html>
      {/* <form>
        <h2>How many did you know?</h2>
        <input type="text" placeholder="name" ref={nameEl} />
        <input type="number" placeholder="rankplace" ref={rankEl} />
        <button type="submit" className="myButton">
          Answer
        </button> 
       </form> */}
      {/* <section>
<h2>How Many did you know?</h2>
<input type="text" id="myBtn" value="none?" />
<p>
  Click the button below to change the text displayed on the input
  button above.
</p>
<button onClick ={() =>"myFunction(1)"}>1</button>
<button onClick ={() =>"myFunction(2)"}>2</button>
<button onClick ={() =>"myFunction(3)"}>3</button>
<button onClick ={() =>"myFunction(4)"}>4</button>
</section> */}
      <iframe
        title="poll"
        name="opinionstage-widget"
        src="https://www.opinionstage.com/api/v1/widgets/892086/iframe"
        data-opinionstage-iframe="571f2e27-32c2-4483-b143-d9640315e1e6"
        width="100%"
        height="400"
        scrolling="auto"
        frameBorder="0"
        allow="fullscreen"
      ></iframe>
    </html>
  );
}

export default Poll;

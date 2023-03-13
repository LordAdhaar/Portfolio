export default function Blob(){

    const blob = document.querySelector("div.blob");

    document.body.onpointermove = event => {
        console.log(event);
        const {clientX, clientY} = event;
        
        blob.animate({
            left:`${clientX}px`,
            top:`${clientY}px`
        },{duration:1500,fill:"forwards"});
    }

    return (
        <div className="blob">sheesh</div>
    )
}
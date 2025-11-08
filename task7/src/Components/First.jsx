
import birds from '../assets/Images/birds.jpg'
import NatureVideo from '../assets/Videos/NatureVideo.mp4'
import NatureAudio from '../assets/Audios/NatureAudio.mp3'
function First() {
    return (
        <div>
            <div>
                <img src={birds} height="200px" width="200px" />
            </div>
            <div>
                <img src='/Image.jpg' height="200px" width="200px" />
            </div>
        </div>

    )
}
export default First





export function Second(){
    return(
        <div>
        <iframe width="560" height="315" src="https://www.youtube.com/embed/gYp5dU_ZLbE?si=mwiIMfPuqKv17pKw" ></iframe>
        <video>
            <source src={NatureVideo} type="video/mp4"/>
        </video>
        <video>
            <source src="/Video1.mp4" />
        </video>
        </div>
    )
}



export function Third() {
  return (
    <div>
      <audio controls>
        <source src={NatureAudio} type="audio/mp3" />
      </audio>

        <audio controls>
        <source src='/Audio.mp3'  />
      </audio>
    </div>

  
  );
}

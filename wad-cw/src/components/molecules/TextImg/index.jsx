import Img from './download.webp'
const TextImg=()=>{
    return(
        <div>
            <div style={{marginTop: '30px'}} class="card text-bg-dark">
  <center><img style={{width: '600px', height: '300px'}} src={Img} class="img-fluid" alt="..."/></center>
  <div class="card-img-overlay">
    <h5 class="card-title">Pet Products</h5>
    <p class="card-text">The pet industry (sometimes known as petconomy) is the market industry associated with companion animals. It includes things that are associated with the production, consumption and cultural activities linked to the market.</p>
    <p class="card-text"><small>Last updated 3 mins ago</small></p>
  </div>
</div>
        </div>
    )
}
export default TextImg;
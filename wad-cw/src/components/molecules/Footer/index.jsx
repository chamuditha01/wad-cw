import MyImage1 from "../../atoms/FaceImg";
import Category from "../../atoms/FooterCateg";
import "./index.css";


const Footer = () => {
  return (
    <div >
      <footer class="site-footer">
        <div class="container">
          <div class="row">
            <div class="col-sm-12 col-md-6">
              <h6>About</h6>
              <p class="text-justify">
                {" "}
                A pet shop or pet store is a essential services retailer which
                sells animals and pet care resources to the public. A variety of
                animal supplies and pet accessories are also sold in pet shops.
                The products sold include: food, treats, toys, collars, leashes,
                cat litter, cages and aquariums.
              </p>
            </div>

            <div class="col-xs-6 col-md-3">
              <h6>Product Categories</h6>
              <ul class="footer-links">
                <Category path={'/Dog' } categ={'Dog Food'}/>
                <Category path={'/Dog'} categ={'Dog Accesories'}/>
                <Category path={'/Cat'} categ={'Cat Food'}/>
                <Category path={'/Cat'} categ={'Cat Accesories'}/>
                <Category path={'/Bird'} categ={'Bird Food'}/>
                <Category path={'/Bird'} categ={'Bird Accesories'}/>
                
              </ul>
            </div>

            <div class="col-xs-6 col-md-3">
              <h6>Links</h6>
              <ul class="footer-links">
                <li>
                  <a href="http://scanfcode.com/about/">About Us</a>
                </li>
                <li>
                  <a href="http://scanfcode.com/contact/">Contact Us</a>
                </li>
                <li>
                  <a href="http://scanfcode.com/privacy-policy/">
                    Privacy Policy
                  </a>
                </li>
              </ul>
            </div>
          </div>
          <hr />
        </div>
        <div class="container">
          <div class="row">
            <div class="col-md-4 col-sm-6 col-xs-12">
              
                  <a
                   
                    href="https://web.facebook.com/dr.pethospital/?_rdc=1&_rdr" >
                      <MyImage1/>
                    
                  </a>
                
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};
export default Footer;

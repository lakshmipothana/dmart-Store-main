import Nav from "components/Nav";
import Spinner from "components/Spinner";
import { Helmet } from "react-helmet-async";
import { NavSidebar } from "./NavSidebar";
import { SearchBar } from "./SearchBar";

const Layout = ({ children, title, loading }) => {
  return (
    <>
      <Helmet>
        <meta charSet="utf-8" />
        <title>{title || "Home"} | DMart Store </title>
        <meta
          name="description"
          content="E-commerce store built with React, Node, Express and Postgres"
        />
        <meta
          name="robots"
          content="max-snippet:-1, max-image-preview:large, max-video-preview:-1"
        />
        <link rel="canonical" href="https://pern-store.netlify.app/" />
        <meta property="og:locale" content="en_US" />
        <meta property="og:type" content="website" />
        <meta property="og:title" content="DMart Store" />
        <meta
          property="og:description"
          content="E-commerce store built with React, Node, Express and Postgres"
        />
        <meta property="og:url" content="https://pern-store.netlify.app/" />
        <meta property="og:site_name" content="DMart Store" />
        <meta property="og:image" content="android-chrome-512x512.png" />
        <meta property="og:image:secure_url" content="android-chrome-512x512.png" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:site" content="@_odunsi_" />
        <meta name="twitter:creator" content="@_odunsi_" />
        <meta
          name="twitter:description"
          content="E-commerce store built with React, Node, Express and Postgres"
        />
        <meta name="twitter:title" content="DMart Store" />
        <meta name="twitter:image" content="android-chrome-512x512.png" />
        <style type="text/css">{`
        html,body{
          height: 100%;
        }
        .body_style{
          padding-right: 10rem !important;
          padding-left: 0.2rem !important;
        }
        .nav_style{
          width: 500px;
        }
        .footer_style{
          width: 1100px;
          margin: -20px 0 0 40px;
        }
    `}</style>
      </Helmet>
      <div className="min-h-screen flex flex-col">
        <Nav/>
        <div className="flex h-screen mt-10 bg-gray-1000 h-full  ">

          <div className="flex h-screen mt-10 bg-gray-1000 nav_style">
              {title !== "Login" ?
                <NavSidebar/> : ''
              } 
          </div> 
        
            {loading ? (
              <>
                <Spinner size={100} loading />
              </>
            ) : (
              <div className="text-gray-700 mt-1 mx-auto px-2 lg:px-56 flex-grow h-full w-full body_style ">
                <div  className="text-gray-700">  
                   <main className="h-full">{children}</main>
                </div>

                {/* <footer className=" flex justify-between  py-2  footer_style">
                  <p className="text-sm text-gray-600 sm:ml-60 sm:pl-4 sm:py-2 sm:mt-0 mt-4">
                    &copy; {new Date().getFullYear()} DMart Store —
                    <a
                      href="#"
                      className="text-gray-500 ml-1"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      @Dmart
                    </a>
                  </p>
                </footer>  */}
   
              </div>
            )}
        </div>
       
      </div>
    </>
  );
};

export default Layout;

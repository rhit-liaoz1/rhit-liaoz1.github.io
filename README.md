<html>
    <head>
        <meta charset="utf-8">
        <link rel="stylesheet" href="main.css">
        <title>Zeyu Liao - About</title>
    </head>
    <body>
        <header>
            <h1>Zeyu Liao</h1>
            
        </header>
        <nav>
            <ul>
                <li><a href="about.html">About</a></li>
                <li><a href="resume.html">Resume</a></li>
                <img class="resize" id="some" style="max-width: 50%; text-align: right; visibility:hidden" src="l.jpg"/>
            </ul>
        </nav>
        <main>
          <h1>About</h1>
          <p>
            Hello! This is Zeyu Liao. A student at Rose-Hulman Institute of Technology and major in Computer Science.
          </p>
          <p>
            I regard myself a curious and positive person. I am always curiour about new things and passion about things around me. 
          </p>
          <p>
            I like reading scientific novel, making origami and cooking in my free time. 
          </p>
          <!-- <audio autoplay>
            <source src="SlumberingLore.mp3" type="audio/mpeg">
            If you're reading this, audio isn't supported. 
           </audio> -->
           <embed name="myMusic" loop="true" hidden="true" src="SlumberingLore.mp3"></embed>
          <input type="button" value="My Photo" onclick="showImage();"/>
          
    
        <script> function showImage(){
            // console.log( document.getElementById("some"));
            if( document.getElementById("some").style.visibility=="visible") {
                document.getElementById("some").style.visibility="hidden";
            }else{
                document.getElementById("some").style.visibility="visible";
            } 
           
         }
         </script>
    
        </main>
        <footer>
            <p>
                You can reach me at liaoz1@rose-hulman.edu
            </p>
        </footer>
    </body>
</html>

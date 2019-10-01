PennController.DebugOff();
PennController.ResetPrefix(null);
PennController.Sequence( "welcome", "details", "trial","trial2", "trialbunny", "trialbunny2", "introductionanimals", "experiment", "send" , "final" )
;
PennController( "welcome" ,
    defaultText
        .print()
    ,
   newText("<p> Salutare tuturor, vom juca un joc foarte distractiv împreună cu un vrăjitor, un pui de dragon, nişte umbre care aparţin unor animale şi sunete făcute de ele. (Fii atent şi la sunete deci.) </p>" ),
    newText("<p> Te rog introdu ID-ul tău, răspunde la nişte întrebări, iar apoi fă click pe butonul de mai jos pentru a începe experimentul.</p>")
    ,
    newTextInput("ID")
        .print()
    ,
     newText("<p> Ce vârstă ai? </p>"),
    newTextInput("Age")
        .print()
	       ,
	  newText("<p> Ce sex ai? (M/ F/ Altul) </p>"),
	       newTextInput ("Gender")
        .print()
	       , 
	        newText("<p> Cu ce te ocupi?</p>"),
	    newTextInput ("Profession")  
        .print()
	       ,
	       newText ("<p>Pentru a trece la pagina următoare pe parcursul jocului, foloseşte bara de spaţiu (space bar). </p>")
	       .print()
	       ,
	       
    newButton("Start")
        .print()
        .wait()
    ,
    newVar("ID")
        .settings.global()
        .set( getTextInput("ID")))
	      
.log( "ID" , getVar("ID") );
PennController("welcome" ,
	    defaultText
	        .print()
	    ,
	    newText ("<p> A fost odată ca niciodată, într-un ţinut îndepărtat, un vrăjitor foarte talentat pe nume Merlin, căruia îi plăcea foarte mult să se joace cu umbrele şi să îi facă pe ceilalţi să ghicească ale cui sunt.. </p>")
	    ,
	       newText ("<p> Acum Merlin joacă jocul umbrelor cu un pui de dragon foarte drăguţi,Flurry and Bindy, care trebuie să ghicească a cărui animal este umbra pe care o are în faţa sa.</p>")
	              ,    
	     newImage ("wizardanddragonsnames85.png")
               .print ()
	       ,
	       newText ("<p> Pentru a trece la pagina următoare pe parcursul jocului, foloseşte bara de spaţiu (space bar). </p>")
	       .print()
	       ,
	       newKey(" ")
        .wait()
)
;

PennController("details" ,
	    defaultText
	        .print()
	,
  newText("<p> Imaginile vor arăta umbra, dar şi toate animalele din joc şi animalele care se află atunci în faţa cortinei. </p>"),
newText ("<p> Dacă nu sunt deloc animale în faţa cortinei , va fi în loc o linie. </p>")
	       ,
 newText ("<p> De exemplu, în imaginea de mai jos, sunt trei pisici şi niciuna din ele nu este în faţa cortinei. Toate pisicile s-au dus în spatele cortinei, dar umbra aparţine doar uneia dintre ele.</p>"),
	  newImage ("catshadowonecatonstage", "catshadowonecatonstage.png")
	.print (),
	       newText ("<p> Pentru a trece la pagina următoare pe parcursul jocului, foloseşte bara de spaţiu (space bar). </p>")
	       .print()
	       ,
	 newKey(" ")
        .wait())

;
PennController("details" ,
	    defaultText
	        .print()
	       ,
 newText ("<p> Puii de dragon trebuie să descrie a cui crede că este umbra. </p>")
	       ,
   newText ("<p> Când puiul de dragon oferă cea mai bună descriere, trebuie să-l răsplăteşti cu un măr mare. </p>"), 
   newText ("<p> Atunci când puiul de dragon nu oferă cea mai bună descriere, îi dai doar un măr mic. </p>")
    ,
  newImage("bigapple", "bigapple.png")
        .settings.size(200,200)
        // .print()
    ,
    newImage("smallapple", "smallapple.png")
        .settings.size(200,200)
        // .print()
    ,
    newCanvas(450,200)
        .settings.add( 0 , 0 , getImage("bigapple") )
        .settings.add( 250 , 0 , getImage("smallapple") )
        .print()
	       ,
	       newKey(" ")
        .wait()
)
;	    
PennController("trial" ,
	    defaultText
	        .print()
	    
	       ,
            newText ("<p> Hai să vedem cum te descurci. Hai să facem cunoştinţă cu doi iepuraşi foarte drăguţi. </p> "),
	       newImage ("twobunnies", "twobunnies.png")
	       .print ()
	       ,
	       newAudio("bunnysounds", "bunnysounds.mp3")
		.play()
	       ,
	       newText ("<p> Pentru a trece la pagina următoare pe parcursul jocului, foloseşte bara de spaţiu (space bar). </p>")
	       .print()
	       ,
	       newKey(" ")
        .wait()
)
;
PennController("trial" ,
	    defaultText
	        .print()
	    
	       ,
newText ("<p> Puiul de dragon Flurry trebuie să descrie a cui crede că este umbra. </p> "),
	       newImage ("Flurry", "Flurry.png")
	       .print ()
	       ,
	       newKey(" ")
        .wait()
)
;
PennController("trial2" ,
	    defaultText
	        .print()
	    
	       ,
	       newText 
	       ("<p> Iepuraşul portocaliu rămâne în faţa cortinei, celălalt iepuraş se duce în spatele cortinei. Puiul de dragon Flurry vede următoarea umbră. </p>"),
	      
	       newImage ("bunnyshadow2", "bunnyshadowonebunnyonstage2.png")
	       .print ( )
	       ,
	       newAudio("bunnysounds", "bunnysounds.mp3")
		.play()
	       ,
	       newText ("<p> Puiul de dragon Flurry spune: Este iepuraşul portocaliu. </p>")
	       ,
	        newText ("<p> Puiul de dragon Flurry nu a oferit cea mai bună descriere. Umbra nu aparţine iepuraşului portocaliu, ci iepuraşului roz. </p>"),
	       newText ("<p> Din acest motiv, îi vei da puiului de dragon un măr mic, nu un măr mare. </p>"),
	       newText ("<p> Pentru a răsplăti puiul de dragon, fă click pe mărul care este răsplata sa, în cazul acesta, mărul mic</p>")
	       ,
	  
	       newImage("bigapple", "bigapple.png")
        .settings.size(200,200)
        // .print()
    ,
    newImage("smallapple", "smallapple.png")
        .settings.size(200,200)
        // .print()
    ,
    newCanvas(450,200)
        .settings.add( 0 , 0 , getImage("bigapple") )
        .settings.add( 250 , 0 , getImage("smallapple") )
        .print()
	       ,
	       // newKey("FJ")
newSelector()
    .settings.add( getImage("bigapple") , getImage("smallapple") )
    .settings.keys(          "F"    ,          "J"   )
    .settings.log()
    .wait()
)
.log( "ID" , getVar("ID"))
;

	        
PennController("trialbunny" ,
	    defaultText
	        .print()
	    
	       ,
	       newText 
	       ("<p> Hai să vedem cum te descurci pe cont propriu. Pentru a răsplăti dragonul, fă pur şi simplu click pe mărul dorit.</p>"),
	       newImage ("bunnyshadow2", "bunnyshadowonebunnyonstage2.png")
	       .print ( )
	       ,
	       newAudio("bunnysounds", "bunnysounds.mp3")
		.play()
	       ,
	       newText ("<p> Puiul de dragon Flurry: Este iepuraşul albastru. </p>")
	       ,
	       newText ("<p> Cum vei răsplati puiul de dragon? </p>")
	       ,
	       newImage("bigapple", "bigapple.png")
        .settings.size(200,200)
        // .print()
    ,
    newImage("smallapple", "smallapple.png")
        .settings.size(200,200)
        // .print()
    ,
    newCanvas(450,200)
        .settings.add( 0 , 0 , getImage("bigapple") )
        .settings.add( 250 , 0 , getImage("smallapple") )
        .print()
	       ,
	       // newKey("FJ")
newSelector()
    .settings.add( getImage("bigapple") , getImage("smallapple") )
    .settings.keys(          "F"    ,          "J"   )
    .settings.log()
    .wait()
)
.log( "ID" , getVar("ID"))
;

PennController("trialbunny2" ,
	    defaultText
	        .print()
	    
	       ,
	       
	      
	       newImage ("bunnyshadow2", "bunnyshadowonebunnyonstage2.png")
	       .print ( )
	       ,
	       newText ("<p> Puiul de dragon Flurry: Este iepuraşul roz.</p>")
	       ,
	       newText ("<p> Cum vei răsplati puiul de dragon? </p>")
	       ,
	     newImage("bigapple", "bigapple.png")
        .settings.size(200,200)
        // .print()
    ,
    newImage("smallapple", "smallapple.png")
        .settings.size(200,200)
        // .print()
    ,
    newCanvas(450,200)
        .settings.add( 0 , 0 , getImage("bigapple") )
        .settings.add( 250 , 0 , getImage("smallapple") )
        .print()
	       ,
	       // newKey("FJ")
newSelector()
    .settings.add( getImage("bigapple") , getImage("smallapple") )
    .settings.keys(          "F"    ,          "J"   )
    .settings.log()
    .wait()
)
.log( "ID" , getVar("ID"))
;

PennController("trialbunny2" ,
	    defaultText
	        .print()
	    
	       ,
	       newText ("<p> Hai să vedem acum a cui este umbra! Umbra este iepuraşul roz! </p>")
	       ,
	      
	       newImage ("bunnyrevealed", "bunnyrevealedonstage1.jpg")
	       .print ( )
	       ,
	        newAudio("bunnysounds", "bunnysounds.mp3")
		.play()
	       ,
	      newText ("<p> Pentru a trece la pagina următoare, foloseşte bara de spaţiu (space bar). </p>")
	       .print()
	       ,
	       newKey(" ")
        .wait()
)
;
PennController("introductionanimals" ,
	    defaultText
	        .print()
	    ,
	    newText ("<p> Hai acum să facem cunoştinţă cu celelalte animale din spectacol. Avem un grup de trei câini. </p>")
	    ,
	                  
	     newImage ("threedogs.png")
               .print ()
	       ,
	       newAudio("barking", "barking.mp3")
		.play()
	       ,
	       newText ("<p> Pentru a trece la pagina următoare, foloseşte bara de spaţiu (space bar). </p>")
	       .print(),
	       newKey(" ")
        .wait()
	      )
;

PennController("introductionanimals" ,
	    defaultText
	        .print()
	    ,
	   
	       newText ("<p> Un grup de trei broaşte. </p>")
	    ,
	                  
	     newImage ("threefrogs.png")
               .print ()
	       ,
	       newAudio("frogsounds2sec", "frogsounds2sec.mp3")
		.play()
	       ,
	       newKey(" ")
        .wait()
	       )
;       
PennController("introductionanimals" ,
	    defaultText
	        .print(),
	       newText ("<p> Un grup de trei pisici. </p>")
	    ,
	                  
	     newImage ("threecats.png")
               .print ()
	       ,
	       newAudio("catsounds", "catsounds.mp3")
		.play()
	       ,
	       newKey(" ")
        .wait()
	       
	      )
;
PennController("introductionanimals" ,
	    defaultText
	        .print(),
	       newText ("<p> Şi un grup de trei vaci. </p>")
	    ,
	                  
	     newImage ("threecows.png")
               .print ()
	       ,
	       newAudio("cowsounds2sec", "cowsounds2sec.mp3")
		.play()
	       ,
	       newKey(" ")
        .wait()
	       
	      )	
;
PennController ("experiment",
		defaultText
	        .print(),
		 newText ("<p> Toţi câinii s-au dus acum în spatele cortinei. <p>")
	       ,
  newText ("<p> Puii de dragon trebuie să descrie a cui cred că este umbra. </p>")
	       ,
   newText ("<p> Când puiul de dragon oferă cea mai bună descriere, trebuie să-l răsplăteşti cu un măr mare. </p>"), 
   newText ("<p> Atunci când puiul de dragon nu oferă cea mai bună descriere, îi dai doar un măr mic. </p>")
,
  newImage("bigapple", "bigapple.png")
        .settings.size(200,200)
        // .print()
    ,
    newImage("smallapple", "smallapple.png")
        .settings.size(200,200)
        // .print()
    ,
    newCanvas(450,200)
        .settings.add( 0 , 0 , getImage("bigapple") )
        .settings.add( 250 , 0 , getImage("smallapple") )
        .print()
	       ,
	       newKey(" ")
        .wait()
)
;	    

PennController("experiment" ,
	    defaultText
	        .print(),
            newText ("<p> Uite, câinele galben a revenit în faţa cortinei, dar umbra este încă acolo, în lumina reflectoarelor.</p>")
	          ,        
	       newText ("<p> Deci umbra nu este câinele galben! </p>")
	       ,
      newImage ("dogshadowonedogonstage", "dogshadowonedogonstage.png")
         .print()
	       ,
	       	newAudio("barking", "barking.mp3")
		.play()
	       ,
	       newKey(" ")
        .wait()
	       
	      )
;
PennController ("experiment",
		defaultText
	        .print(),
		newText ("<p> Hai să vedem ce zice puiul de dragon Flurry despre umbră. </p>")
	       ,
		newImage ("Flurry", "Flurry.png").
		print ()
		,
		newKey(" ")
        .wait()
	       
	      )
;
		
	PennController ("experiment",
		defaultText
	        .print(),	
		newImage( "dogshadowonedogonstage","dogshadowonedogonstage.png")
               .print ()
		,
		newAudio("barking", "barking.mp3")
		.play()
		,
		newText ("<p> Puiul de dragon Flurry: Poate că este câinele roşu. </p>")
		,
		newText ("<p> Cum vei răsplati puiul de dragon? </p>")
		,
	       newImage("bigapple", "bigapple.png")
        .settings.size(200,200)
        // .print()
    ,
    newImage("smallapple", "smallapple.png")
        .settings.size(200,200)
        // .print()
    ,
    newCanvas(450,200)
        .settings.add( 0 , 0 , getImage("bigapple") )
        .settings.add( 250 , 0 , getImage("smallapple") )
        .print()
	       ,
	       // newKey("FJ")
newSelector()
    .settings.add( getImage("bigapple") , getImage("smallapple") )
    .settings.keys(          "F"    ,          "J"   )
    .settings.log()
    .wait()
)
.log( "ID" , getVar("ID"))
;

PennController ("experiment",
		defaultText
	        .print(),
		newImage ("dogshadowonedogonstage", "dogshadowonedogonstage.png")
               .print ()
		,
		newText ("<p> Puiul de dragon Flurry: Poate că este câinele albastru. </p>")
		,
		newText ("<p> Cum vei răsplati puiul de dragon? </p>")
		,
	       newImage("bigapple", "bigapple.png")
        .settings.size(200,200)
        // .print()
    ,
    newImage("smallapple", "smallapple.png")
        .settings.size(200,200)
        // .print()
    ,
    newCanvas(450,200)
        .settings.add( 0 , 0 , getImage("bigapple") )
        .settings.add( 250 , 0 , getImage("smallapple") )
        .print()
	       ,
	       // newKey("FJ")
newSelector()
    .settings.add( getImage("bigapple") , getImage("smallapple") )
    .settings.keys(          "F"    ,          "J"   )
    .settings.log()
    .wait()
)
.log( "ID" , getVar("ID"))
;

PennController ("experiment",
		defaultText
	        .print(),
		newImage ("dogshadowonedogonstage", "dogshadowonedogonstage.png")
               .print ()
		,
		newText ("<p> Puiul de dragon Flurry: Sigur că este câinele roşu.</p>")
		,
		newText ("<p> Cum vei răsplati puiul de dragon? </p>")
		,
	       newImage("bigapple", "bigapple.png")
        .settings.size(200,200)
        // .print()
    ,
    newImage("smallapple", "smallapple.png")
        .settings.size(200,200)
        // .print()
    ,
    newCanvas(450,200)
        .settings.add( 0 , 0 , getImage("bigapple") )
        .settings.add( 250 , 0 , getImage("smallapple") )
        .print()
	       ,
	       // newKey("FJ")
newSelector()
    .settings.add( getImage("bigapple") , getImage("smallapple") )
    .settings.keys(          "F"    ,          "J"   )
    .settings.log()
    .wait()
)
.log( "ID" , getVar("ID"))
;

PennController("experiment" ,
	    defaultText
	        .print(),
	 newText ("<p> Uite, câinele roşu a revenit în faţa cortinei, alăturându-se câinelui galben, dar umbra este încă acolo, în lumina reflectoarelor</p>")
	         ,        
	       newText ("<p> Deci umbra nu este câinele roşu! Şi nu este câinele galben! </p>")
	         ,         
	   newImage ("dogshadowtwodogsonstage", "dogshadowtwodogsonstage.png")
         .print()
    ,
	       	newAudio("barking", "barking.mp3")
		.play()
	       ,
	       newText ("<p> Pentru a trece la pagina următoare, foloseşte bara de spaţiu (space bar). </p>")
	       .print(),
	       
	       newKey(" ")
        .wait()
	       
	      )
;
PennController ("experiment",
		defaultText
	        .print(),
		newText ("<p> Hai acum să vedem ce zice puiul de dragon Flurry despre umbră. </p>")
		,
		newImage ("dogshadowtwodogsonstage", "dogshadowtwodogsonstage.png")
               .print ()
		,
		newAudio("barking", "barking.mp3")
		.play()
		,
		newText ("<p> Puiul de dragon Flurry: Sigur că este câinele albastru. </p>")
		,
		newText ("<p> Cum vei răsplati puiul de dragon? </p>")
		 ,
	       newImage("bigapple", "bigapple.png")
        .settings.size(200,200)
        // .print()
    ,
    newImage("smallapple", "smallapple.png")
        .settings.size(200,200)
        // .print()
    ,
    newCanvas(450,200)
        .settings.add( 0 , 0 , getImage("bigapple") )
        .settings.add( 250 , 0 , getImage("smallapple") )
        .print()
	       ,
	       // newKey("FJ")
newSelector()
    .settings.add( getImage("bigapple") , getImage("smallapple") )
    .settings.keys(          "F"    ,          "J"   )
    .settings.log()
    .wait()
)
.log( "ID" , getVar("ID"))
;

PennController ("experiment",
		defaultText
	        .print(),
		newText ("<p> E sigur că este câinele albastru într-adevăr! </p>")
		,
		newText ("<p> Hai să vedem ce zice puiul de dragon Bindy despre umbră. </p>")
		,
		newImage ("Bindy80", "Bindy80.png")
		.print ()
		,
		newKey(" ")
        .wait()
	           
	      )
;

 PennController ("experiment",
		defaultText
	        .print(),
		newImage ("<p> dogshadowtwodogsonstage", "dogshadowtwodogsonstage.png")
               .print ()
		,
		newAudio("barking", "barking.mp3")
		.play()
		,
		newText ("<p> Puiul de dragon Bindy: Poate că este câinele albastru.</p>")
		,
		newText ("<p> Cum vei răsplati puiul de dragon? </p>")
		,
		newImage("bigapple", "bigapple.png")
        .settings.size(200,200)
        // .print()
    ,
    newImage("smallapple", "smallapple.png")
        .settings.size(200,200)
        // .print()
    ,
    newCanvas(450,200)
        .settings.add( 0 , 0 , getImage("bigapple") )
        .settings.add( 250 , 0 , getImage("smallapple") )
        .print()
	       ,
	       // newKey("FJ")
newSelector()
    .settings.add( getImage("bigapple") , getImage("smallapple") )
    .settings.keys(          "F"    ,          "J"   )
    .settings.log()
    .wait()
)
.log( "ID" , getVar("ID"))
;


PennController ("experiment",
		defaultText
	        .print(),
		newImage ("dogshadowtwodogsonstage", "dogshadowtwodogsonstage.png")
               .print ()
		,
		newText ("<p> Puiul de dragon Bindy: Sigur că este câinele galben.</p>")
		,
		newText ("<p> Cum vei răsplati puiul de dragon? </p>")
		,
	      newImage("bigapple", "bigapple.png")
        .settings.size(200,200)
        // .print()
    ,
    newImage("smallapple", "smallapple.png")
        .settings.size(200,200)
        // .print()
    ,
    newCanvas(450,200)
        .settings.add( 0 , 0 , getImage("bigapple") )
        .settings.add( 250 , 0 , getImage("smallapple") )
        .print()
	       ,
	       // newKey("FJ")
newSelector()
    .settings.add( getImage("bigapple") , getImage("smallapple") )
    .settings.keys(          "F"    ,          "J"   )
    .settings.log()
    .wait()
)
.log( "ID" , getVar("ID"))
;

PennController ("experiment",
		defaultText
	        .print(),
		newImage ("dogshadowtwodogsonstage", "dogshadowtwodogsonstage.png")
               .print ()
		,
		newText ("<p> Puiul de dragon Bindy: Poate că este câinele roşu.</p>")
		,
		newText ("<p> Cum vei răsplati puiul de dragon? </p>")
		,
	       newImage("bigapple", "bigapple.png")
        .settings.size(200,200)
        // .print()
    ,
    newImage("smallapple", "smallapple.png")
        .settings.size(200,200)
        // .print()
    ,
    newCanvas(450,200)
        .settings.add( 0 , 0 , getImage("bigapple") )
        .settings.add( 250 , 0 , getImage("smallapple") )
        .print()
	       ,
	       // newKey("FJ")
newSelector()
    .settings.add( getImage("bigapple") , getImage("smallapple") )
    .settings.keys(          "F"    ,          "J"   )
    .settings.log()
    .wait()
)
.log( "ID" , getVar("ID"))
;

PennController("experiment" ,
	    defaultText
	        .print(),
	       newText ("<p> Hai acum să vedem a cui este umbra. Pam-pam! Este câinele albastru! </p>")
	         ,         
	     newImage ("bluedogonstage.jpg")
               .print ()
	       ,
	       	newAudio("barking", "barking.mp3")
		.play()
	       ,
	       newText ("<p> Pentru a trece la pagina următoare, foloseşte bara de spaţiu (space bar). </p>")
	       .print()
	       ,
	       newKey(" ")
        .wait()
	       
)
;
PennController("experiment" ,
	    defaultText
	        .print(),
	       newText ("<p> Hai să trecem acum la grupul broaştelor. </p>")
	    ,
	                  
	     newImage ("threefrogs.png")
               .print ()
	       ,
	       newAudio("frogsounds2sec", "frogsounds2sec.mp3")
		.play()
		,
	       newText ("<p> Pentru a trece la pagina următoare, foloseşte bara de spaţiu (space bar). </p>")
	       .print(),
	       
	       newKey(" ")
        .wait()
	       
	      )	
;
PennController ("experiment",
		defaultText
	        .print(),
		newText ("<p> Toate broaştele s-au dus acum în spatele cortinei. <p>")
	       ,
  newText ("<p> Puii de dragon trebuie să descrie a cui cred că este umbra. </p>")
	       ,
   newText ("<p> Când puiul de dragon oferă cea mai bună descriere, trebuie să-l răsplăteşti cu un măr mare. </p>"), 
   newText ("<p> Atunci când puiul de dragon nu oferă cea mai bună descriere, îi dai doar un măr mic. </p>")
,
  newImage("bigapple", "bigapple.png")
        .settings.size(200,200)
        // .print()
    ,
    newImage("smallapple", "smallapple.png")
        .settings.size(200,200)
        // .print()
    ,
    newCanvas(450,200)
        .settings.add( 0 , 0 , getImage("bigapple") )
        .settings.add( 250 , 0 , getImage("smallapple") )
        .print()
	       ,
	       newKey(" ")
        .wait()
)
;	    
PennController("experiment" ,
	    defaultText
	        .print(),
	       newText ("<p> Uite, broasca albastră a revenit în faţa cortinei, dar umbra este încă acolo, în lumina reflectoarelor. </p>")
	          ,  
	       newText ("<p> Deci umbra nu este broasca albastră! </p>")
	       ,
      newImage ("frogshadowonefrogonstage", "frogshadowonefrogonstage.png")
         .print()
	       ,
	       newAudio("frogsounds2sec", "frogsounds2sec.mp3")
		.play(),
	       newText ("<p> Pentru a trece la pagina următoare, foloseşte bara de spaţiu (space bar). </p>")
	       .print(),
	       newKey(" ")
        .wait()
	       
	      )
;
PennController ("experiment",
		defaultText
	        .print(),
		newText ("<p> Hai să vedem ce spune puiul de dragon Bindy despre umbră. </p>"),
		newImage ("Bindy80", "Bindy80.png")
		.print ()
		,
		newKey(" ")
        .wait()
	       
	      )
;
PennController ("experiment",
		defaultText
	        .print(),
		newImage ("frogshadowonefrogonstage", "frogshadowonefrogonstage.png")
               .print ()
		,
		newText ("<p> Puiul de dragon Bindy: Sigur că este broasca mov.</p>")
		,
		newText ("<p> Cum vei răsplăti puiul de dragon? </p>")
		,
	      newImage("bigapple", "bigapple.png")
        .settings.size(200,200)
        // .print()
    ,
    newImage("smallapple", "smallapple.png")
        .settings.size(200,200)
        // .print()
    ,
    newCanvas(450,200)
        .settings.add( 0 , 0 , getImage("bigapple") )
        .settings.add( 250 , 0 , getImage("smallapple") )
        .print()
	       ,
	       // newKey("FJ")
newSelector()
    .settings.add( getImage("bigapple") , getImage("smallapple") )
    .settings.keys(          "F"    ,          "J"   )
    .settings.log()
    .wait()
)
.log( "ID" , getVar("ID"))
;

	PennController ("experiment",
		defaultText
	        .print(),
		newImage ("frogshadowonefrogonstage", "frogshadowonefrogonstage.png")
               .print ()
		,
		newAudio("frogsounds2sec", "frogsounds2sec.mp3")
		.play()
		,
		newText ("<p> Puiul de dragon Bindy: Poate că este broasca roşie. </p>")
		,
		newText ("<p> Cum vei răsplăti puiul de dragon? </p>")
		,
	      newImage("bigapple", "bigapple.png")
        .settings.size(200,200)
        // .print()
    ,
    newImage("smallapple", "smallapple.png")
        .settings.size(200,200)
        // .print()
    ,
    newCanvas(450,200)
        .settings.add( 0 , 0 , getImage("bigapple") )
        .settings.add( 250 , 0 , getImage("smallapple") )
        .print()
	       ,
	       // newKey("FJ")
newSelector()
    .settings.add( getImage("bigapple") , getImage("smallapple") )
    .settings.keys(          "F"    ,          "J"   )
    .settings.log()
    .wait()
)
.log( "ID" , getVar("ID"))
;

PennController ("experiment",
		defaultText
	        .print(),
		newImage ("frogshadowonefrogonstage", "frogshadowonefrogonstage.png")
               .print ()
		,
		newText ("<p> Puiul de dragon Bindy: Poate că este broasca mov.</p>")
		,
		newText ("<p> Cum vei răsplati puiul de dragon? </p>")
		,
	     newImage("bigapple", "bigapple.png")
        .settings.size(200,200)
        // .print()
    ,
    newImage("smallapple", "smallapple.png")
        .settings.size(200,200)
        // .print()
    ,
    newCanvas(450,200)
        .settings.add( 0 , 0 , getImage("bigapple") )
        .settings.add( 250 , 0 , getImage("smallapple") )
        .print()
	       ,
	       // newKey("FJ")
newSelector()
    .settings.add( getImage("bigapple") , getImage("smallapple") )
    .settings.keys(          "F"    ,          "J"   )
    .settings.log()
    .wait()
)
.log( "ID" , getVar("ID"))
;

PennController("experiment" ,
	    defaultText
	        .print(),
	        newText ("<p> Uite, broasca mov a revenit în faţa cortinei, alăturându-se broaştei albastre, dar umbra este încă acolo, în lumina reflectoarelor. </p>")
	         ,         
	       newText ("<p> Deci umbra nu este broasca mov! Şi nu este broasca albastră! </p>")
	       ,
      newImage ("frogshadowtwofrogsonstage", "frogshadowtwofrogsonstage.png")
         .print()
	       ,
	       newAudio("frogsounds2sec", "frogsounds2sec.mp3")
		.play()
	       ,
	       newText ("<p> Pentru a trece la pagina următoare, foloseşte bara de spaţiu (space bar). </p>")
	       .print()
	       ,
	       newKey(" ")
        .wait()
	       
	      )
;
PennController ("experiment",
		defaultText
	        .print(),
		newText ("<p> Hai să vedem ce spune puiul de dragon Bindy despre umbră.</p>")
		,
		newImage ("frogshadowtwofrogsonstage", "frogshadowtwofrogsonstage.png")
               .print ()
		,
		newAudio("frogsounds2sec", "frogsounds2sec.mp3")
		.play()
		,
		newText ("<p> Puiul de dragon Bindy: Sigur că este broasca roşie.</p>")
		,
		newText ("<p> Cum vei răsplati puiul de dragon? </p>")
		,
	      newImage("bigapple", "bigapple.png")
        .settings.size(200,200)
        // .print()
    ,
    newImage("smallapple", "smallapple.png")
        .settings.size(200,200)
        // .print()
    ,
    newCanvas(450,200)
        .settings.add( 0 , 0 , getImage("bigapple") )
        .settings.add( 250 , 0 , getImage("smallapple") )
        .print()
	       ,
	       // newKey("FJ")
newSelector()
    .settings.add( getImage("bigapple") , getImage("smallapple") )
    .settings.keys(          "F"    ,          "J"   )
    .settings.log()
    .wait()
)
.log( "ID" , getVar("ID"))
;

PennController ("experiment",
		defaultText
	        .print(),
		newText ("<p>  E sigur că este broasca roşie într-adevăr! </p>"),
		newText ("<p> Hai să vedem acum ce spune puiul de dragon Flurry despre umbră. </p>"),
		newImage ("Flurry", "Flurry.png")
		.print ()
		,
		 newKey(" ")
                .wait()
	       
	      )
;

PennController ("experiment",
		defaultText
	        .print(),

		newImage ("frogshadowtwofrogsonstage", "frogshadowtwofrogsonstage.png")
               .print ()
		,

		newText ("<p> Puiul de dragon Flurry: Poate că este broasca roşie. </p>")
		,
		newText ("<p> Cum vei răsplati puiul de dragon? </p>")
		,
	       newImage("bigapple", "bigapple.png")
        .settings.size(200,200)
        // .print()
    ,
    newImage("smallapple", "smallapple.png")
        .settings.size(200,200)
        // .print()
    ,
    newCanvas(450,200)
        .settings.add( 0 , 0 , getImage("bigapple") )
        .settings.add( 250 , 0 , getImage("smallapple") )
        .print()
	       ,
	       // newKey("FJ")
newSelector()
    .settings.add( getImage("bigapple") , getImage("smallapple") )
    .settings.keys(          "F"    ,          "J"   )
    .settings.log()
    .wait()
)
.log( "ID" , getVar("ID"))
;

PennController ("experiment",
		defaultText
	        .print(),
		newImage ("frogshadowtwofrogsonstage", "frogshadowtwofrogsonstage.png")
               .print ()
		,
		newText ("<p> Puiul de dragon Flurry: Sigur că este broasca albastră. </p>")
		,
		newText ("<p> Cum vei răsplati puiul de dragon? </p>")
		,
	       newImage("bigapple", "bigapple.png")
        .settings.size(200,200)
        // .print()
    ,
    newImage("smallapple", "smallapple.png")
        .settings.size(200,200)
        // .print()
    ,
    newCanvas(450,200)
        .settings.add( 0 , 0 , getImage("bigapple") )
        .settings.add( 250 , 0 , getImage("smallapple") )
        .print()
	       ,
	       // newKey("FJ")
newSelector()
    .settings.add( getImage("bigapple") , getImage("smallapple") )
    .settings.keys(          "F"    ,          "J"   )
    .settings.log()
    .wait()
)
.log( "ID" , getVar("ID"))
;

PennController ("experiment",
		defaultText
	        .print(),
		newImage ("frogshadowtwofrogsonstage", "frogshadowtwofrogsonstage.png")
               .print ()
		,
		
		newText ("<p> Puiul de dragon Flurry: Poate că este broasca mov. </p>")
	       ,
		newText ("<p> Cum vei răsplati puiul de dragon? </p>")
		,
	      newImage("bigapple", "bigapple.png")
        .settings.size(200,200)
        // .print()
    ,
    newImage("smallapple", "smallapple.png")
        .settings.size(200,200)
        // .print()
    ,
    newCanvas(450,200)
        .settings.add( 0 , 0 , getImage("bigapple") )
        .settings.add( 250 , 0 , getImage("smallapple") )
        .print()
	       ,
	       // newKey("FJ")
newSelector()
    .settings.add( getImage("bigapple") , getImage("smallapple") )
    .settings.keys(          "F"    ,          "J"   )
    .settings.log()
    .wait()
)
.log( "ID" , getVar("ID"))
;

PennController("experiment" ,
	    defaultText
	        .print(),
	       newText ("<p> Hai acum să vedem a cui este umbra. Pam-pam! Este broasca roşie! </p>")
	         ,         
	     newImage ("redfrogrevealedonstage.jpg")
               .print ()
	       ,
	       newAudio("frogsounds2sec", "frogsounds2sec.mp3")
		.play(),
	       
	       newKey(" ")
        .wait()
	       
)
;
PennController("experiment" ,
	    defaultText
	        .print(),
	       newText ("<p> Hai acum să trecem la grupul pisicilor.  </p>")
	    ,
	                  
	     newImage ("threecats.png")
               .print ()
	       ,
	       newAudio("catsounds", "catsounds.mp3")
		.play()
		,
	       newText ("<p> To move to the next page, use the space bar. </p>")
	       .print()
	       ,
	       newKey(" ")
        .wait()
	       
	      )	
;
PennController ("experiment",
		defaultText
	        .print(),
	newText ("<p> Toţi pisicile s-au dus acum în spatele cortinei. <p>")
	       ,
  newText ("<p> Puii de dragon trebuie să descrie a cui cred că este umbra. </p>")
	       ,
   newText ("<p> Când puiul de dragon oferă cea mai bună descriere, trebuie să-l răsplăteşti cu un măr mare. </p>"), 
   newText ("<p> Atunci când puiul de dragon nu oferă cea mai bună descriere, îi dai doar un măr mic. </p>")
    ,
  newImage("bigapple", "bigapple.png")
        .settings.size(200,200)
        // .print()
    ,
    newImage("smallapple", "smallapple.png")
        .settings.size(200,200)
        // .print()
    ,
    newCanvas(450,200)
        .settings.add( 0 , 0 , getImage("bigapple") )
        .settings.add( 250 , 0 , getImage("smallapple") )
        .print()
	       ,
	       newKey(" ")
        .wait()
)
;	    
PennController("experiment" ,
	    defaultText
	        .print(),
	        newText ("<p> Uite, acum pisica verde a revenit în faţa cortinei, dar umbra este încă acolo, în lumina reflectoarelor.</p>")
	          ,    
	       newText ("<p> Deci umbra nu este pisica verde! </p>")
          ,
      newImage ("catshadowonecatonstage", "catshadowonecatonstage.png")
         .print()
	       ,
	       newAudio("catsounds", "catsounds.mp3")
		.play(),
	        newText ("<p> Pentru a trece la pagina următoare, foloseşte bara de spaţiu (space bar). </p>")
	       .print(),
	       newKey(" ")
        .wait()
	       
	      )
;
PennController ("experiment",
		defaultText
	        .print(),
		newText ("<p> Hai să vedem ce spune puiul de dragon Flurry despre umbră. </p>")
	
	       ,
		newImage ("Flurry", "Flurry.png")
		.print ()
		,
		newKey(" ")
        .wait()
	       
	      )
;

PennController ("experiment",
		defaultText
	        .print(),
		
		newImage ("catshadowonecatonstage","catshadowonecatonstage.png")
               .print ()
		,
		newAudio("catsounds", "catsounds.mp3")
		.play()
		,

		newText ("<p> Puiul de dragon Flurry: Poate că este pisica roz.</p>")
		,
		newText ("<p> Cum vei răsplăti puiul de dragon? </p>")
		,
	     newImage("bigapple", "bigapple.png")
        .settings.size(200,200)
        // .print()
    ,
    newImage("smallapple", "smallapple.png")
        .settings.size(200,200)
        // .print()
    ,
    newCanvas(450,200)
        .settings.add( 0 , 0 , getImage("bigapple") )
        .settings.add( 250 , 0 , getImage("smallapple") )
        .print()
	       ,
	       // newKey("FJ")
newSelector()
    .settings.add( getImage("bigapple") , getImage("smallapple") )
    .settings.keys(          "F"    ,          "J"   )
    .settings.log()
    .wait()
)
.log( "ID" , getVar("ID"))
;

PennController ("experiment",
		defaultText
	        .print(),
		newImage ("catshadowonecatonstage","catshadowonecatonstage.png")
               .print ()
		,
		newText ("<p> Puiul de dragon Flurry: Sigur că este pisica albastră.</p>")
		,
		newText ("<p> Cum vei răsplăti puiul de dragon? </p>")
		,
	       newImage("bigapple", "bigapple.png")
        .settings.size(200,200)
        // .print()
    ,
    newImage("smallapple", "smallapple.png")
        .settings.size(200,200)
        // .print()
    ,
    newCanvas(450,200)
        .settings.add( 0 , 0 , getImage("bigapple") )
        .settings.add( 250 , 0 , getImage("smallapple") )
        .print()
	       ,
	       // newKey("FJ")
newSelector()
    .settings.add( getImage("bigapple") , getImage("smallapple") )
    .settings.keys(          "F"    ,          "J"   )
    .settings.log()
    .wait()
)
.log( "ID" , getVar("ID"))
;

PennController ("experiment",
		defaultText
	        .print(),
		newImage ("catshadowonecatonstage","catshadowonecatonstage.png")
               .print ()
		,
		newText ("<p> Puiul de dragon Flurry: Poate că este pisica albastră.</p>")
		,
		newText ("<p> Cum vei răsplăti puiul de dragon? </p>")
		,
	      newImage("bigapple", "bigapple.png")
        .settings.size(200,200)
        // .print()
    ,
    newImage("smallapple", "smallapple.png")
        .settings.size(200,200)
        // .print()
    ,
    newCanvas(450,200)
        .settings.add( 0 , 0 , getImage("bigapple") )
        .settings.add( 250 , 0 , getImage("smallapple") )
        .print()
	       ,
	       // newKey("FJ")
newSelector()
    .settings.add( getImage("bigapple") , getImage("smallapple") )
    .settings.keys(          "F"    ,          "J"   )
    .settings.log()
    .wait()
)
.log( "ID" , getVar("ID"))
;
PennController("experiment" ,
	    defaultText
	        .print(),
	      newText ("<p> Uite, pisica albastră a revenit în faţa cortinei, alăturându-se pisicii verzi, dar umbra este încă acolo, în lumina reflectoarelor.</p>")
	         ,      
	       newText ("<p> Deci umbra nu este pisica albastră! Şi nu este pisica verde! </p>")
			,
      newImage ("catshadowtwocatsonstage", "catshadowtwocatsonstage.png")
         .print(),
	       newAudio("catsounds", "catsounds.mp3")
		.play()
	       ,
	       newText ("<p> Pentru a trece la pagina următoare, foloseşte bara de spaţiu (space bar). </p>")
	       .print()
	       ,
	       newKey(" ")
        .wait()
	       
	      )
;
PennController ("experiment",
		defaultText
	        .print(),
		newText ("<p> Hai să vedem ce spune puiul de dragon Flurry despre umbră. </p>")
		,
		newImage ("catshadowtwocatsonstage","catshadowtwocatsonstage.png")
               .print ()
		,
		newAudio("catsounds", "catsounds.mp3")
		.play()
		,
		newText ("<p> Puiul de dragon Flurry: Sigur că este pisica roz.</p>")
		,
		newText ("<p> Cum vei răsplăti puiul de dragon? </p>")
		,
	      newImage("bigapple", "bigapple.png")
        .settings.size(200,200)
        // .print()
    ,
    newImage("smallapple", "smallapple.png")
        .settings.size(200,200)
        // .print()
    ,
    newCanvas(450,200)
        .settings.add( 0 , 0 , getImage("bigapple") )
        .settings.add( 250 , 0 , getImage("smallapple") )
        .print()
	       ,
	       // newKey("FJ")
newSelector()
    .settings.add( getImage("bigapple") , getImage("smallapple") )
    .settings.keys(          "F"    ,          "J"   )
    .settings.log()
    .wait()
)
.log( "ID" , getVar("ID"))
;

PennController ("experiment",
		defaultText
	        .print(),
		newText ("<p> E sigur că este pisica roz într-adevăr! </p>")
		,
		newText ("<p> Hai să vedem acum ce spune puiul de dragon Bindy despre umbră. </p>")
		,
		newImage ("Bindy80", "Bindy80.png")
		.print ()
		,
		 newKey(" ")
        .wait()
	       
	      )
;
PennController ("experiment",
		defaultText
	        .print(),
		newImage ("catshadowtwocatsonstage","catshadowtwocatsonstage.png")
               .print ()
		,
		newText ("<p> Puiul de dragon Bindy: Poate că este pisica roz.</p>")
		,
		newText ("<p> Cum vei răsplăti puiul de dragon? </p>")
		,
	   newImage("bigapple", "bigapple.png")
        .settings.size(200,200)
        // .print()
    ,
    newImage("smallapple", "smallapple.png")
        .settings.size(200,200)
        // .print()
    ,
    newCanvas(450,200)
        .settings.add( 0 , 0 , getImage("bigapple") )
        .settings.add( 250 , 0 , getImage("smallapple") )
        .print()
	       ,
	       // newKey("FJ")
newSelector()
    .settings.add( getImage("bigapple") , getImage("smallapple") )
    .settings.keys(          "F"    ,          "J"   )
    .settings.log()
    .wait()
)
.log( "ID" , getVar("ID"))
;

PennController ("experiment",
		defaultText
	        .print(),
		newImage ("catshadowtwocatsonstage","catshadowtwocatsonstage.png")
               .print ()
		,
		newText ("<p> Puiul de dragon Bindy: Poate că este pisica verde.</p>")
		,
		newText ("<p> Cum vei răsplăti puiul de dragon? </p>")
		,
	      newImage("bigapple", "bigapple.png")
        .settings.size(200,200)
        // .print()
    ,
    newImage("smallapple", "smallapple.png")
        .settings.size(200,200)
        // .print()
    ,
    newCanvas(450,200)
        .settings.add( 0 , 0 , getImage("bigapple") )
        .settings.add( 250 , 0 , getImage("smallapple") )
        .print()
	       ,
	       // newKey("FJ")
newSelector()
    .settings.add( getImage("bigapple") , getImage("smallapple") )
    .settings.keys(          "F"    ,          "J"   )
    .settings.log()
    .wait()
)
.log( "ID" , getVar("ID"))
;

PennController ("experiment",
		defaultText
	        .print(),
		newImage ("catshadowtwocatsonstage","catshadowtwocatsonstage.png")
               .print ()
		,
		newText ("<p> Puiul de dragon Bindy: Sigur că este pisica albastră. </p>")
	       ,
		newText ("<p> Cum vei răsplăti puiul de dragon? </p>")
		,
	       newImage("bigapple", "bigapple.png")
        .settings.size(200,200)
        // .print()
    ,
    newImage("smallapple", "smallapple.png")
        .settings.size(200,200)
        // .print()
    ,
    newCanvas(450,200)
        .settings.add( 0 , 0 , getImage("bigapple") )
        .settings.add( 250 , 0 , getImage("smallapple") )
        .print()
	       ,
	       // newKey("FJ")
newSelector()
    .settings.add( getImage("bigapple") , getImage("smallapple") )
    .settings.keys(          "F"    ,          "J"   )
    .settings.log()
    .wait()
)
.log( "ID" , getVar("ID"))
;

PennController("experiment" ,
	    defaultText
	        .print(),
	       newText ("<p> Hai acum să vedem a cui este umbra. Pam-pam! Umbra este pisica roz!  </p>")
	         ,         
	     newImage ("pinkcatrevealedonstage.jpg")
               .print ()
	       ,
	       newAudio("catsounds", "catsounds.mp3")
		.play()
		,
	       newKey(" ")
        .wait()
	       
)
;

PennController("experiment" ,
	    defaultText
	        .print(),
	       newText ("<p> Hai să trecem mai departe la grupul vacilor. </p>")
	    ,
	                  
	     newImage ("threecows.png")
               .print ()
	       ,
	       newAudio("cowsounds2sec", "cowsounds2sec.mp3")
		.play()
		,
	        newText ("<p> Pentru a trece la pagina următoare, foloseşte bara de spaţiu (space bar). </p>")
	       .print()
	       ,
	       newKey(" ")
        .wait()
	       
	      )	
;
PennController ("experiment",
		defaultText
	        .print(),
		newText ("<p> Toate vacile s-au dus acum în spatele cortinei. <p>")
	       ,
  newText ("<p> Puii de dragon trebuie să descrie a cui cred că este umbra. </p>")
	       ,
   newText ("<p> Când puiul de dragon oferă cea mai bună descriere, trebuie să-l răsplăteşti cu un măr mare. </p>"), 
   newText ("<p> Atunci când puiul de dragon nu oferă cea mai bună descriere, îi dai doar un măr mic. </p>")
    ,
  newImage("bigapple", "bigapple.png")
        .settings.size(200,200)
        // .print()
    ,
    newImage("smallapple", "smallapple.png")
        .settings.size(200,200)
        // .print()
    ,
    newCanvas(450,200)
        .settings.add( 0 , 0 , getImage("bigapple") )
        .settings.add( 250 , 0 , getImage("smallapple") )
        .print()
	       ,
	       newKey(" ")
        .wait()
)
;	    
PennController("experiment" ,
	    defaultText
	        .print(),
	        newText ("<p> Uite, vaca portocalie a revenit în faţa cortinei, dar umbra este încă acolo, în lumina reflectoarelor.</p>")
	          ,      
	       newText ("<p> Deci umbra nu este vaca portocalie! </p>")
	       ,
      newImage ("cowshadowonecowonstage", "cowshadowonecowonstage.png")
         .print()
	       ,

	       newAudio("cowsounds2sec", "cowsounds2sec.mp3")
		.play(),
	        newText ("<p> Pentru a trece la pagina următoare, foloseşte bara de spaţiu (space bar). </p>")
	       .print()
	       ,
	       newKey(" ")
        .wait()
	       
	      )
;
PennController ("experiment",
		defaultText
	        .print(),
		newText ("<p> Hai să vedem ce spune puiul de dragon Bindy despre umbră. </p>")
	       ,
		newImage ("Bindy80", "Bindy80.png")
		.print ()
		,
		 newKey(" ")
        .wait()
	       
	      )
;
PennController ("experiment",
		defaultText
	        .print(),
		newImage ("cowshadowonecowonstage","cowshadowonecowonstage.png")
               .print ()
		,
		newText ("<p> Puiul de dragon Bindy: Sigur că este vaca galbenă. </p>")
		,
		newText ("<p> Cum vei răsplăti puiul de dragon? </p>")
		,
	       newImage("bigapple", "bigapple.png")
        .settings.size(200,200)
        // .print()
    ,
    newImage("smallapple", "smallapple.png")
        .settings.size(200,200)
        // .print()
    ,
    newCanvas(450,200)
        .settings.add( 0 , 0 , getImage("bigapple") )
        .settings.add( 250 , 0 , getImage("smallapple") )
        .print()
	       ,
	       // newKey("FJ")
newSelector()
    .settings.add( getImage("bigapple") , getImage("smallapple") )
    .settings.keys(          "F"    ,          "J"   )
    .settings.log()
    .wait()
)
.log( "ID" , getVar("ID"))
;

PennController ("experiment",
		defaultText
	        .print(),
		newImage ("cowshadowonecowonstage","cowshadowonecowonstage.png")
               .print ()
		,
		newAudio("cowsounds2sec", "cowsounds2sec.mp3")
		.play()
		,
		newText ("<p> Puiul de dragon Bindy: Poate că este vaca verde.</p>")
		,
		newText ("<p> Cum vei răsplăti puiul de dragon? </p>")
		,
	       newImage("bigapple", "bigapple.png")
        .settings.size(200,200)
        // .print()
    ,
    newImage("smallapple", "smallapple.png")
        .settings.size(200,200)
        // .print()
    ,
    newCanvas(450,200)
        .settings.add( 0 , 0 , getImage("bigapple") )
        .settings.add( 250 , 0 , getImage("smallapple") )
        .print()
	       ,
	       // newKey("FJ")
newSelector()
    .settings.add( getImage("bigapple") , getImage("smallapple") )
    .settings.keys(          "F"    ,          "J"   )
    .settings.log()
    .wait()
)
.log( "ID" , getVar("ID"))
;


PennController ("experiment",
		defaultText
	        .print(),
		newImage ("cowshadowonecowonstage","cowshadowonecowonstage.png")
               .print ()
		,
		newText ("<p> Puiul de dragon Bindy: Poate că este vaca galbenă.</p>")
		,
		newText ("<p> Cum vei răsplati puiul de dragon? </p>")
		,
	      newImage("bigapple", "bigapple.png")
        .settings.size(200,200)
        // .print()
    ,
    newImage("smallapple", "smallapple.png")
        .settings.size(200,200)
        // .print()
    ,
    newCanvas(450,200)
        .settings.add( 0 , 0 , getImage("bigapple") )
        .settings.add( 250 , 0 , getImage("smallapple") )
        .print()
	       ,
	       // newKey("FJ")
newSelector()
    .settings.add( getImage("bigapple") , getImage("smallapple") )
    .settings.keys(          "F"    ,          "J"   )
    .settings.log()
    .wait()
)
.log( "ID" , getVar("ID"))
;

PennController("experiment" ,
	    defaultText
	        .print(),
	      newText ("<p> Uite, vaca galbenă a revenit în faţa cortinei şi s-a alăturat celei portocalii, dar umbra este încă acolo, în lumina reflectoarelor.</p>")
	         ,         
	       newText ("<p> Deci umbra nu este vaca galbenă! Şi nu este vaca portocalie! </p>")
	       ,
      newImage ("cowshadowtwocowsonstage", "cowshadowtwocowsonstage.png")
         .print()
	       ,
	       newAudio("cowsounds2sec", "cowsounds2sec.mp3")
		.play()
	       ,
	        newText ("<p> Pentru a trece la pagina următoare, foloseşte bara de spaţiu (space bar). </p>")
	       .print()
	       ,
	       newKey(" ")
        .wait()
	       
	      )
;
PennController ("experiment",
		defaultText
	        .print(),
		newText ("<p> Hai să vedem ce spune puiul de dragon Bindy despre umbră. </p>")
		,
		newImage ("cowshadowtwocowsonstage","cowshadowtwocowsonstage.png")
               .print ()
		,
		newAudio("cowsounds2sec", "cowsounds2sec.mp3")
		.play()
		,
		newText ("<p> Puiul de dragon Bindy: Sigur că este vaca verde.</p>")
		,
		newText ("<p> Cum vei răsplăti puiul de dragon? </p>")
			 ,
	     newImage("bigapple", "bigapple.png")
        .settings.size(200,200)
        // .print()
    ,
    newImage("smallapple", "smallapple.png")
        .settings.size(200,200)
        // .print()
    ,
    newCanvas(450,200)
        .settings.add( 0 , 0 , getImage("bigapple") )
        .settings.add( 250 , 0 , getImage("smallapple") )
        .print()
	       ,
	       // newKey("FJ")
newSelector()
    .settings.add( getImage("bigapple") , getImage("smallapple") )
    .settings.keys(          "F"    ,          "J"   )
    .settings.log()
    .wait()
)
.log( "ID" , getVar("ID"))
;


PennController ("experiment",
		defaultText
	        .print(),
		newText ("<p> E sigur că este vaca verde într-adevăr! </p>")
		,
		newText ("<p> Hai acum să vedem ce spune puiul de dragon Flurry despre umbră. </p>"),
		newImage ("Flurry", "Flurry.png")
		.print ()
		,
		newKey(" ")
        .wait()
	       
	      )
;
		
PennController ("experiment",
		defaultText
	        .print(),
		newImage ("cowshadowtwocowsonstage","cowshadowtwocowsonstage.png")
               .print ()
		,
		newText ("<p> Puiul de dragon Flurry: Poate că este vaca verde.</p>")
		,
		newText ("<p>  Cum vei răsplăti puiul de dragon? </p>")
		,
	      newImage("bigapple", "bigapple.png")
        .settings.size(200,200)
        // .print()
    ,
    newImage("smallapple", "smallapple.png")
        .settings.size(200,200)
        // .print()
    ,
    newCanvas(450,200)
        .settings.add( 0 , 0 , getImage("bigapple") )
        .settings.add( 250 , 0 , getImage("smallapple") )
        .print()
	       ,
	       // newKey("FJ")
newSelector()
    .settings.add( getImage("bigapple") , getImage("smallapple") )
    .settings.keys(          "F"    ,          "J"   )
    .settings.log()
    .wait()
)
.log( "ID" , getVar("ID"))
;
PennController ("experiment",
		defaultText
	        .print(),
		newImage ("cowshadowtwocowsonstage","cowshadowtwocowsonstage.png")
               .print ()
		,
		newText ("<p> Puiul de dragon Flurry: Poate că este pisica portocalie.</p>")
		,
		newText ("<p>  Cum vei răsplăti puiul de dragon? </p>")
		,
	      newImage("bigapple", "bigapple.png")
        .settings.size(200,200)
        // .print()
    ,
    newImage("smallapple", "smallapple.png")
        .settings.size(200,200)
        // .print()
    ,
    newCanvas(450,200)
        .settings.add( 0 , 0 , getImage("bigapple") )
        .settings.add( 250 , 0 , getImage("smallapple") )
        .print()
	       ,
	       // newKey("FJ")
newSelector()
    .settings.add( getImage("bigapple") , getImage("smallapple") )
    .settings.keys(          "F"    ,          "J"   )
    .settings.log()
    .wait()
)
.log( "ID" , getVar("ID"))
;

PennController ("experiment",
		defaultText
	        .print(),
		newImage ("cowshadowtwocowsonstage","cowshadowtwocowsonstage.png")
               .print ()
		,
		
		newText ("<p> Puiul de dragon Flurry: Sigur că este vaca galbenă. </p>")
	       ,
		newText ("<p> Cum vei răsplăti puiul de dragon? </p>")
		,
	      newImage("bigapple", "bigapple.png")
        .settings.size(200,200)
        // .print()
    ,
    newImage("smallapple", "smallapple.png")
        .settings.size(200,200)
        // .print()
    ,
    newCanvas(450,200)
        .settings.add( 0 , 0 , getImage("bigapple") )
        .settings.add( 250 , 0 , getImage("smallapple") )
        .print()
	       ,
	       // newKey("FJ")
newSelector()
    .settings.add( getImage("bigapple") , getImage("smallapple") )
    .settings.keys(          "F"    ,          "J"   )
    .settings.log()
    .wait()
)
.log( "ID" , getVar("ID"))
;

PennController("experiment" ,
	    defaultText
	        .print(),
	       newText ("<p> Hai să vedem acum a cui este umbra. Pam-pam! Umbra este vaca verde!  </p>")
	         ,         
	     newImage ("greencowrevealedonstage.jpg")
               .print ()
	       ,
	       newAudio("cowsounds2sec", "cowsounds2sec.mp3")
		.play()
		,
	       newKey(" ")
        .wait()
	       
)
;
PennController.SendResults( "send" );
PennController( "final" ,
	       newText("<p> Mulţumesc pentru participare! Codul chestionarului pentru MTurk este: kutieee. Te rog fă copy-paste acestui cod în MTurk!</p>") 
	       .print()
	       ,
	 newText("<p> Puii de dragon îţi mulţumesc pentru mere şi la fel şi vrăjitorul! Pa-pa! </p>")
        .print(),
    newButton("void")
        .wait()
	       )
;
  

  

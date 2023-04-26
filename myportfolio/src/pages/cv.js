import { useState } from "react";



const Cv = () => {

    const [open, setOpen] = useState(false);
        const [education, setEducation] = useState(false);
     const [specialCertification, setSpecialCertification] = useState(false);
          const [voluntaryWork, setVoluntaryWork] = useState(false);
  const [otherMerits, setOtherMerits] = useState(false);


  return (
    <div className="bg-img-big bg-cover h-screen">
      <div className="pt-10"></div>

      <div className="flex justify-center mt-10">
        <div className="bg-red-800 w-20 h-70 rounded-l-2xl"></div>
        <div className="text-white text-3xl pl-6 bg-blue-300 bg-opacity-30">
          <div>
            <button onClick={() => setOpen(!open)} className="mb-5 pt-5  hover:text-red-600">
              Yrkeserfarenhet
            </button>
          </div>
          <div>
            <button onClick={() => setEducation(!education)} className="mb-5  hover:text-red-600">Utbildning</button>
          </div>
          <div>
            <button onClick={() => setSpecialCertification(!specialCertification)} className="mb-5 hover:text-red-600">Särskilda intyg</button>
          </div>
          <div>
            <button onClick={() => setVoluntaryWork(!voluntaryWork)}  className="mb-5  hover:text-red-600"> Ideella arbeten</button>
          </div>
          <div>
            <button onClick={() => setOtherMerits(!otherMerits)}  className="mb-5  hover:text-red-600">Övriga meriter</button>
          </div>
        </div>
        <div className="bg-blue-300 bg-opacity-30 w-2/3 pl-10">
          <div>
            <div className="bg-black rounded-xl mr-16">{open && <div className="text-white pl-10 mt-2 pb-6 pt-5 text-2xl leading-relaxed"><b>2021-2022, Biträdande rektor, Malmsjö skola, Botkyrka. <br /> 2018-2021, Biträdande rektor, Hölöskolan, Södertälje. <br />2014-2018, Arbetslagsledare, Lillhagaskolan, Nykvarn. <br />2012-2018, Lärare, Lillhagaskolan, Nykvarn. <br />2006-2012, Lärare, Rosenborgskolan, Södertälje. <br /> 1999-2000, Ansvarig för stållager, ISAB, Södertälje.</b></div>}</div>
          <div className="bg-black rounded-xl mr-16">{education && <div className="text-white pl-10 mt-2 pb-6 pt-5 text-2xl leading-relaxed"><b>2022-2024, Frontendutvecklare för mobil och webb, Chas Academy Yrkeshögskola, Stockholm. <br /> <br /> 2011, Statsvetenskap 30p, Stockholms universitet, Stockholm. <br /> <br /> 2000-2006, Grundskollärarutbildning med SO-inriktning åk 4-9, Stockholms universitet, Stockholm. <br /> <br /> 1996-1999, Naturvetenskapliga programmet, Västergårdsgymnasiet, Södertälje.  </b></div>}</div>
          <div className="bg-black rounded-xl mr-16">{specialCertification && <div className="text-white pl-10 mt-2 pb-6 pt-5 text-2xl leading-relaxed"><b>Körkort - Personbil, lastbil och truck. <br /><br />Ledarutbildningar inom basket, Förbundstränare - steg 3. <br /><br />Domarutbildningar inom basket, Distriktsdomare - steg 2.</b></div>}</div>
          <div className="bg-black rounded-xl mr-16">{voluntaryWork && <div className="text-white pl-10 mt-2 pb-6 pt-5 text-2xl leading-relaxed"><b>2004-Pågår, Speaker och konferencier i Svenska Basketligan, Högsta serien. <br /><br />1994-2011, Basketdomare. <br /><br />2006-2007, Ansvarig baskettränare för Svenska Basketbollförbundets regionverksamhet <br /><br />1995-2008, Baskettränare i Södertälje Basketbollklubb.</b></div>}</div>
         <div className="bg-black rounded-xl mr-16">{otherMerits && <div className="text-white pl-10 mt-2 pb-6 pt-5 text-2xl leading-relaxed"><b>2010-2012, Styrelseledarmot i bostadsrättsföreningen Brf Parken 1.</b></div>}</div>
         
          </div>
        </div>
      </div>
    </div>
  );
};

export default Cv;

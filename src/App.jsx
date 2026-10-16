import React from 'react';
import './App.css';

const App = () => {
  return (
    <div className="container">
      <h1>LA KUBA</h1>

      {/* ===================== VIDEOLAR ===================== */}
      <h2>VIDEOLAR</h2>

      {/* Video 1 */}
      <div className="card">
        <h3>#1</h3>
        <p><strong>sana :</strong> 16-oktabr</p>
        <p><strong>reel ideasi :</strong></p>
        <p className="idea">
          hook : LA KUBA qanday ishlab chiqiladi va unga nimalar qo‘shiladi?<br />
          CONCEPT : Iloji bo‘lsa product qanday ishlab chiqishi, nimalar qo‘shilishi va ishlab chiqarish jarayonini odamlarga ishlab chiqarish joyidayoq ko‘rsatish kerak<br />
          CTA : Sifat va ishlab chiqarish jarayonini ko‘rsatish.
        </p>
      </div>

      {/* Video 2 */}
      <div className="card">
        <h3>#2</h3>
        <p><strong>sana :</strong> 20-oktabr</p>
        <p><strong>reel ideasi :</strong></p>
        <p className="idea">
          hook : “Bitta ichay” degan do‘st hammamizda bor 😄<br />
          CONCEPT : 2 odam Reel’da bo‘ladi. Birinchi do‘st qo‘liga LA KUBA oladi. Ikkinchi do‘st undan bitta ichay deb so‘raydi.
          Birinchi do‘st uning oldingi safar LA KUBA’sini oxirigacha ichib qo‘yganini eslab rad etadi. Lekin ikkinchi do‘st baribir qo‘lining gapida turib, LA KUBA’ni olib yarisidan ko‘pini ichib qo‘yadi.
        </p>
      </div>

      {/* Video 3 */}
      <div className="card">
        <h3>#3</h3>
        <p><strong>sana :</strong> 24-oktabr</p>
        <p><strong>reel ideasi :</strong></p>
        <p className="idea">
          bir odam boladi uning o‘ng qolida suv turadi va suv turgan qolning background kulrang boladi
          va uning chap qo‘lida esa LA KUBA bo‘ladi odam hayajonlanib LA KUBA ichida va butun background rangli yani normal holatiga tushadi
        </p>
      </div>

      {/* Video 4 */}
      <div className="card">
        <h3>#4</h3>
        <p><strong>sana :</strong> 28-oktabr</p>
        <p><strong>reel ideasi :</strong></p>
        <p className="idea">
          ikta bokal (kurushka) turadi birinchisiga oddiy suv quyiladi va zerikarli hechqanday positive yoq bolgan muzika oynaydi
          ikkinchisiga esa LA KUBE quyiladi va muzika positive ga ozgaradi
        </p>
      </div>

      {/* Video 5 */}
      <div className="card">
        <h3>#5</h3>
        <p><strong>sana :</strong> 30</p>
        <p><strong>reel ideasi :</strong></p>
        <p className="idea">
          2 ta dost boladi va ular sayrga chiqashga magazindan qaysi suvni tanlashganda LA KUBA ni tanlashadi va ssena boshqa vaziyatga otadi u yerda esa dostlar endi kinoga borishmoqchi bo'lishadi va magazindan hudda o'sha LA KUBA opchiqishadi ssena yana ozgarada va dostlar endi chanqagak bolashadi va yana LA KUBA olishadi va oxirgi martda ssena ozgaradi va endi esa dostlar boshqa dostlari bilan yeg'ilishmoqchi bo'lishadi va qaysi suv olishga qaror qilishganda LA KUBA tanlashadi
        </p>
      </div>

      {/* Video 6 */}
      <div className="card">
        <h3>#6</h3>
        <p><strong>sana :</strong> 3-noyabr</p>
        <p><strong>reel ideasi :</strong></p>
        <p className="idea">
          montajer ish qilayotgan bo'ladi va u charchab oxiri boshini stolga qo'yadi va keyn bir shaxs yokida qo'l uning oldiga LA KUBA TR yani LA KUBA energetic bankani qoyadi va montajorchi uni ichib energiya kirishib ozining ishiga qaytadi va uni bitirb oxirga ssenada ozining boshlig'iga korsatadi va boshliqdan maqtovga erishadi
        </p>
      </div>

      {/* ===================== FOTOLAR ===================== */}
      <h2>FOTOLAR (postlar)</h2>

      {/* Foto 1 */}
      <div className="card">
        <h3>#1</h3>
        <p><strong>sana :</strong> 18-oktabr</p>
        <p><strong>type :</strong> carousel</p>
        <p><strong>carousel :</strong></p>
        <p className="idea">
          1-fotoda odam LA KUBA ichib turgan boladi tepada esa yozga qaytmoqchimisiz ? degan tekst turadi
          2-fotada esa osha LA KUBA ichgan odam yozga oxshagan backgroundda qarab turgan boladi va tepada tabrikayman siz yozga qaytdingiz degan tekst tura
        </p>
      </div>

      {/* Foto 2 */}
      <div className="card">
        <h3>#2</h3>
        <p><strong>sana :</strong> 22-oktabr</p>
        <p><strong>type :</strong> post</p>
        <p><strong>post :</strong></p>
        <p className="idea">
          bir odam magazinadan LA KUBA bankalarini ogirlayotgan boladi orqasidan esa qoravul quylab yurgan bo‘ladi
        </p>
      </div>

      {/* Foto 3 */}
      <div className="card">
        <h3>#3</h3>
        <p><strong>sana :</strong> 26-oktabr</p>
        <p><strong>type :</strong> post</p>
        <p><strong>post :</strong></p>
        <p className="idea">
          odam trenajorny zalda bo‘ladi va qo‘lini LA KUBE energy drink uzotvotgan bo‘ladi shaxsning yuzi va oyoqlari korinmaydi faqat tananing orta qismi
        </p>
      </div>

      {/* Foto 4 */}
      <div className="card">
        <h3>#4</h3>
        <p><strong>sana :</strong> 30-oktabr</p>
        <p><strong>type :</strong> carousel</p>
        <p><strong>carousel :</strong></p>
        <p className="idea">
          1-fotada tekst yoziladi va tekstda : "siz odamning tanasida har narsaning nechta % borligini bilarmidingiz" degan tekst chiqadi
          va 2-fotoda odamning tanasida % nima borligini normal holatda korsatiladi va % ichida : suv boladi taxminan 80% va tepasida “oddiy odamlar” degan tekst turadi
          3-fotoda esa odamning tanasida 99% faqat LA KUBA borligini korsatilinadi va tepadagi tekst “men :” deb yozilgan bo‘ladi
        </p>
      </div>
    </div>
  );
};

export default App;
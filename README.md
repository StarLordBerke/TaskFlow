# TaskFlow - Görev ve Proje Yönetim Sistemi API'si

## 📌 Proje Hakkında
Bu proje, bir yazılım şirketinin ekip içerisindeki görevleri, projeleri ve çalışanların sorumluluklarını takip etmesi amacıyla geliştirilmiş bir REST API sistemidir. Node.js ve Express.js kullanılarak geliştirilmiş olup, tamamen RESTful mimariye uygun CRUD operasyonlarını desteklemektedir.

## 🚀 Kullanılan Teknolojiler
- **Backend:** Node.js, Express.js
- **Mimari:** REST API
- **Ara Katman (Middleware):** Temel Loglama Sistemi
- **Test Aracı:** Postman

## ⚙️ Kurulum ve Çalıştırma Talimatları

Projeyi kendi yerel ortamınızda (localhost) çalıştırmak için aşağıdaki adımları sırasıyla izleyin:

### Ön Koşullar
Bilgisayarınızda [Node.js](https://nodejs.org/)'in ve API testlerini yapabilmek için [Postman](https://www.postman.com/)'in yüklü olması gerekmektedir.

### 1. Projeyi Hazırlama
Proje dosyalarını indirdikten veya kopyaladıktan sonra terminalinizi (veya komut satırınızı) açın ve proje klasörünün dizinine gidin:
`cd taskflow-api`

### 2. Bağımlılıkları Yükleme
Projenin çalışması için gerekli olan Express.js gibi paketleri kurmak için terminale aşağıdaki komutu girin:
`npm install`

### 3. Sunucuyu Başlatma
Kurulum tamamlandıktan sonra sunucuyu ayağa kaldırmak için şu komutu çalıştırın:
`node index.js`

Terminalde `Sunucu http://localhost:3000 adresinde başarıyla çalışıyor...` mesajını gördüğünüzde API kullanıma hazırdır.

## 🗂️ Veri Modeli Tasarımı
Sistem geçici hafıza (array) üzerinde çalışmaktadır. Temel "Görev (Task)" nesnesi aşağıdaki alanlardan oluşur:
- **id** (Integer): Görevin benzersiz kimliği (Otomatik artar).
- **title** (String): Görevin başlığı.
- **description** (String): Görevin detaylı açıklaması.
- **priority** (String): Görevin aciliyet durumu (düşük, orta, yüksek).
- **assignee** (String): Görevin atandığı çalışan.
- **status** (String): Görevin mevcut durumu (bekliyor, devam ediyor, tamamlandı).

## 📡 API Uç Noktaları (Endpoints)

Sistem aşağıdaki 5 temel uç noktayı sunmaktadır:

| Metod  | Endpoint       | Açıklama |
| :--- | :--- | :--- |
| **POST** | `/tasks` | Sisteme yeni bir görev ekler. (JSON formatında body gerektirir) |
| **GET** | `/tasks` | Sistemde kayıtlı olan tüm görevleri liste halinde getirir. |
| **GET** | `/tasks/:id` | Sadece URL'de belirtilen ID'ye sahip görevin detaylarını getirir. |
| **PUT** | `/tasks/:id` | Belirtilen ID'ye sahip görevin bilgilerini günceller. |
| **DELETE**| `/tasks/:id` | Belirtilen ID'ye sahip görevi sistemden tamamen siler. |

## 🛠️ Middleware (Ara Katman)
Projeye dahil edilen **Logger Middleware** sayesinde, API'ye gelen her istek (Method, Endpoint ve Zaman Damgası) eşzamanlı olarak sunucu konsoluna yazdırılarak süreçlerin izlenebilirliği sağlanmıştır.

## 📸 Test Sonuçları ve Ekran Görüntüleri

Projenin tüm CRUD operasyonları ve Logger ara katmanı Postman üzerinden başarıyla test edilmiştir. Aşağıda işlemlerin çalıştığına dair kanıt niteliğindeki ekran görüntüleri yer almaktadır:

### 0. Sunucu Çalışıyor
![Sunuc Testi](https://github.com/StarLordBerke4/TaskFlow/blob/main/img/1.SuncuCalisiyor.jpg)

### 1. Görev Ekleme (POST) İşlemi
![Görev Ekleme Testi](https://github.com/StarLordBerke4/TaskFlow/blob/main/img/2.Post.jpg)

### 2. Tüm Görevleri Listeleme (GET) İşlemi
![Görev Listeleme Testi](https://github.com/StarLordBerke4/TaskFlow/blob/main/img/3.Get.jpg)

### 3. Görev Detayı Görme (GET) İşlemi
![Görev Detayı Testi](https://github.com/StarLordBerke4/TaskFlow/blob/main/img/4.Get1.jpg)

### 4. Görev Güncelleme (PUT) İşlemi
![Görev Güncelleme Testi](https://github.com/StarLordBerke4/TaskFlow/blob/main/img/5.Put.jpg)

### 5. Görev Silme (DELETE) İşlemi
![Görev Silme Testi](https://github.com/StarLordBerke4/TaskFlow/blob/main/img/6.Delete.jpg)

### 6. Terminal Kayıtları
![Logger Çıktısı](https://github.com/StarLordBerke4/TaskFlow/blob/main/img/7.TerminalKayitlari.jpg)

<br>

![Logger Çıktısı](https://github.com/StarLordBerke4/TaskFlow/blob/main/img/8.TerminalKayitlari2.jpg)

---
*Geliştirici: Berke Mert Öztürk*

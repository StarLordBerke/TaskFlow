const express = require('express');
const app = express();
const PORT = 3000;

// API'me dışarıdan gönderilen JSON verilerini okuyabilmem için gerekli Express ayarını yapıyorum.
app.use(express.json());

// 1. TEMEL MIDDLEWARE: LOGGER
// Uygulamama gelen tüm API isteklerinin metodunu, endpoint'ini ve zaman damgasını konsola yazdırıyorum.
app.use((req, res, next) => {
    const timestamp = new Date().toISOString();
    console.log(`[${timestamp}] ${req.method} isteği geldi: ${req.url}`);
    next(); // İsteğin alt satırlara inip işlemeye devam etmesi için next() çağırıyorum.
});

// Geçici Veritabanım (Görevleri şimdilik hafızada tutacağım JavaScript dizisi)
let tasks = [];
let currentId = 1;

// --- GÖREV YÖNETİM MODÜLÜ (CRUD İŞLEMLERİ) ---

// 1. Görev Ekleme (POST) - Yeni bir görev oluşturuyorum.
app.post('/tasks', (req, res) => {
    const { title, description, priority, assignee } = req.body;
    
    const newTask = {
        id: currentId++,
        title,
        description,
        priority,
        assignee,
        status: 'bekliyor' // Görevin başlangıç durumu
    };
    
    tasks.push(newTask);
    res.status(201).json({ message: 'Görev başarıyla oluşturuldu', task: newTask });
});

// 2. Tüm Görevleri Listeleme (GET) - Sistemdeki bütün görevleri çağırıyorum.
app.get('/tasks', (req, res) => {
    res.status(200).json(tasks);
});

// 3. Görev Detayı (GET) - Belirli bir id'ye sahip görevin detaylarını getiriyorum.
app.get('/tasks/:id', (req, res) => {
    const taskId = parseInt(req.params.id);
    const task = tasks.find(t => t.id === taskId);
    
    if (!task) {
        return res.status(404).json({ message: 'Görev bulunamadı' });
    }
    res.status(200).json(task);
});

// 4. Görev Güncelleme (PUT) - Mevcut bir görevin bilgilerini güncelliyorum.
app.put('/tasks/:id', (req, res) => {
    const taskId = parseInt(req.params.id);
    const taskIndex = tasks.findIndex(t => t.id === taskId);
    
    if (taskIndex === -1) {
        return res.status(404).json({ message: 'Görev bulunamadı' });
    }

    const { title, description, priority, assignee, status } = req.body;
    
    // Eski verilerle yeni gönderilenleri birleştiriyorum.
    tasks[taskIndex] = {
        ...tasks[taskIndex],
        title: title || tasks[taskIndex].title,
        description: description || tasks[taskIndex].description,
        priority: priority || tasks[taskIndex].priority,
        assignee: assignee || tasks[taskIndex].assignee,
        status: status || tasks[taskIndex].status
    };

    res.status(200).json({ message: 'Görev güncellendi', task: tasks[taskIndex] });
});

// 5. Görev Silme (DELETE) - Bir görevi sistemden tamamen kaldırıyorum.
app.delete('/tasks/:id', (req, res) => {
    const taskId = parseInt(req.params.id);
    const taskIndex = tasks.findIndex(t => t.id === taskId);
    
    if (taskIndex === -1) {
        return res.status(404).json({ message: 'Görev bulunamadı' });
    }

    tasks.splice(taskIndex, 1);
    res.status(200).json({ message: 'Görev başarıyla silindi' });
});

// Sunucumu başlatıyorum.
app.listen(PORT, () => {
    console.log(`Sunucu http://localhost:${PORT} adresinde başarıyla çalışıyor...`);
});
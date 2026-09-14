const box = document.getElementById('uploadBox');
const fileInput = document.getElementById('fileInput');

function handleFiles(files) {
    if (files.length === 0) return;

    const file = files[0];
    const fileURL = URL.createObjectURL(file);

    box.innerHTML = '';

    const commonStyle = `
        max-width: 90%;
        max-height: 300px;
        margin: auto;
        display: block;
        object-fit: contain;
        border-radius: 12px;
    `;

    if (file.type.startsWith('image/')) {
        const img = document.createElement('img');
        img.src = fileURL;
        img.alt = 'Uploaded Image';
        img.style = commonStyle;
        box.appendChild(img);
    } else if (file.type.startsWith('video/')) {
        const video = document.createElement('video');
        video.src = fileURL;
        video.controls = true;
        video.style = commonStyle;
        box.appendChild(video);
    } else {
        const msg = document.createElement('p');
        msg.textContent = `Uploaded: ${file.name}`;
        msg.style.padding = '1em';
        box.appendChild(msg);
    }
}

box.addEventListener('click', () => {
    fileInput.click();
});

fileInput.addEventListener('change', (e) => {
    handleFiles(e.target.files);
});

box.addEventListener('dragover', (e) => {
    e.preventDefault();
    box.classList.add('dragging');
});

box.addEventListener('dragleave', (e) => {
    e.preventDefault();
    box.classList.remove('dragging');
});

box.addEventListener('drop', (e) => {
    e.preventDefault();
    box.classList.remove('dragging');
    handleFiles(e.dataTransfer.files);
});

document.getElementById("submitBtn").addEventListener("click", function (e) {
    e.preventDefault();

    const file = fileInput.files[0];
    const title = document.getElementById("titleInput").value.trim();
    const description = document.getElementById("descriptionInput").value.trim();
    const email = document.getElementById("emailInput").value.trim();
    const tags = document.getElementById("tagsInput").value.trim();

    let errorMsg = "";

    if (!file) {
        errorMsg += "Please upload a file.\n";
    } else {
        const allowedTypes = ["image/jpeg", "image/png", "video/mp4"];
        if (!allowedTypes.includes(file.type)) {
            errorMsg += "Only JPG, PNG, or MP4 files are allowed.\n";
        }
        const maxSize = file.type.startsWith("video") ? 200 * 1024 * 1024 : 20 * 1024 * 1024;
        if (file.size > maxSize) {
            errorMsg += `File size too large. Max allowed is ${file.type.startsWith("video") ? "200MB" : "20MB"}.\n`;
        }
    }

    if (!title) {
        errorMsg += "Title is required.\n";
    } else if (title.length > 100) {
        errorMsg += "Title must be under 100 characters.\n";
    }

    if (!description) {
        errorMsg += "Description is required.\n";
    } else if (description.length > 500) {
        errorMsg += "Description must be under 500 characters.\n";
    }

    if (!email) {
        errorMsg += "Email is required.\n";
    } else if (!email.endsWith("@gmail.com")) {
        errorMsg += "Please insert a valid Gmail address.\n";
    }

    if (tags.length > 50) {
        errorMsg += "Tags must be under 50 characters.\n";
    }

    console.log("File:", file);
    console.log("Title:", title, "Length:", title.length);
    console.log("Description:", description, "Length:", description.length);
    console.log("Email:", email);
    console.log("Tags:", tags, "Length:", tags.length);
    console.log("Error message:", errorMsg);

    if (errorMsg) {
        alert(errorMsg);
    } else {
        alert("Submission successful!");
    }
});
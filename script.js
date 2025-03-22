// Giải mã TELEX
function decodeTelex() {
    let text = document.getElementById("inputText").value;
    let telexMap = {
        "AA": "Â", "OO": "Ô", "DD": "Đ", "EE": "Ê", "AW": "Ă", "OW": "Ơ", "UW": "Ư", "UOW": "ƯƠ",
        "S": "́", "F": "̀", "R": "̉", "X": "̃", "J": "̣"
    };
    Object.keys(telexMap).forEach(key => {
        let regex = new RegExp(key, "g");
        text = text.replace(regex, telexMap[key]);
    });
    document.getElementById("outputText").innerText = text;
}

// Giải mã SỐ THÀNH CHỮ
function decodeNumbers() {
    let text = document.getElementById("inputText").value;
    let alphabet = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
    let words = text.split(" ");
    let result = words.map(word => {
        return word.match(/\d{1,2}/g)?.map(num => alphabet[num - 1] || "").join("") || "";
    }).join(" ");
    document.getElementById("outputText").innerText = result;
}

// ĐỌC NGƯỢC chuỗi
function reverseText() {
    let text = document.getElementById("inputText").value;
    document.getElementById("outputText").innerText = text;
}

// GIẢI MÃ CHỮ THAY CHỮ
function decodeSubstitution() {
    let text = document.getElementById("inputText").value;
    let alphabet = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
    let substitution = "FGHIJKLMNOPQRSTUVWXYZABCDE"; // Bảng thay thế từ hình ảnh

    let decodedText = text.split("").map(char => {
        let index = substitution.indexOf(char);
        return index !== -1 ? alphabet[index] : char;
    }).join("");

    document.getElementById("outputText").innerText = decodedText;
}

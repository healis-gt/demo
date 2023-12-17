function loadFile(event) {
    var reader = new FileReader();
    reader.onload = function(){
        var output = document.getElementById('profilePic');
        output.src = reader.result;
    };
    reader.readAsDataURL(event.target.files[0]);
}
document.querySelector('.btn-primary').addEventListener('click', function() {
    document.getElementById('fileInput').click();
});
document.getElementById('fileInput').addEventListener('change', loadFile);

function togglePasswordChange() {
    var passwordFields = document.getElementById('passwordFields');
    if (document.getElementById('changePassword').checked) {
        passwordFields.style.display = 'block';
    } else {
        passwordFields.style.display = 'none';
    }
}

document.getElementById('changePassword').addEventListener('click', function() {
    var myModal = new bootstrap.Modal(document.getElementById('passwordModal'), {});
    myModal.show();
});
document.getElementById('passwordModal').addEventListener('shown.bs.modal', function () {
    document.getElementById('oldPassword').focus();
});

function validatePasswords() {
    var newPassword = document.getElementById('newPassword').value;
    var confirmPassword = document.getElementById('confirmPassword').value;

    if (newPassword !== confirmPassword) {
        alert('Passwords do not match.');
        return false;
    }
    return true;
}



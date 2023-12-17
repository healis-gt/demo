var isLinked = false;
var balance = 0;
var walletStatus = document.getElementById('walletStatus');
var walletBalance = document.getElementById('walletBalance');
var linkButton = document.getElementById('linkButton');
var unlinkButton = document.getElementById('unlinkButton');

function updateDisplay() {
    if (isLinked) {
        walletStatus.textContent = 'Status: Linked';
        walletBalance.textContent = 'Balance: ' + balance;
        linkButton.style.display = 'none';
        unlinkButton.style.display = 'inline';
    } else {
        walletStatus.textContent = 'Status: Not Linked';
        walletBalance.textContent = '';
        linkButton.style.display = 'inline';
        unlinkButton.style.display = 'none';
    }
}
var database = {
    walletID: '123',
    verificationCodes: 'abc',
    balance: 100
};
var walletIDInput = document.getElementById('walletID');
var verificationCodesInput = document.getElementById('verificationCodes');
var balanceInput = document.getElementById('balance');
var linkWalletForm = document.getElementById('linkWalletForm');
linkWalletForm.addEventListener('submit', function(event) {
    event.preventDefault();
    if (walletIDInput.value === database.walletID && verificationCodesInput.value === database.verificationCodes && parseFloat(balanceInput.value) === database.balance) {
        isLinked = true;
        balance = parseFloat(balanceInput.value);
        updateDisplay();

        var linkWalletModal = bootstrap.Modal.getInstance(document.getElementById('linkWalletModal'));
        linkWalletModal.hide();
    } else {

        alert('The entered information does not match our records. Please try again.');
    }
});
unlinkButton.addEventListener('click', function() {

    var confirmUnlink = confirm("Are you sure you want to unlink your wallet?");
    if (confirmUnlink) {

        isLinked = false;
        balance = 0;
        updateDisplay();
    }
});
updateDisplay();
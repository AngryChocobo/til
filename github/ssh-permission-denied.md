Another possibility on Windows, which is not covered in any of these answers, and is not covered in the git or github docs on troubleshooting:

git may be using a different openssh executable than you think it is.

I was receiving the Permission denied (public key) error when trying to clone or pull from github and ssh.dev.azure.com, and I'd followed all the instructions and verified that my SSH keys were setup correctly (from SSH's standpoint) using ssh -vT git@github.com and ssh -vT git@ssh.dev.azure.com. And was still getting these errors:

git@github.com: Permission denied (publickey).
fatal: Could not read from remote repository.

Please make sure you have the correct access rights
and the repository exists.
I eventually figured out that the problem is that Git for Windows, and Windows, both have their own versions of openssh. This is documented here: https://github.com/desktop/desktop/issues/5641

I was relying on the Windows ssh-agent service to store my ssh key passphrases, so git (with it's separate version of openssh) couldn't read my private keys. I consider it a bug that this error message is used - it's misleading.

The fix was:

> git config --global core.sshCommand "'C:\Windows\System32\OpenSSH\ssh.exe'"

Or in your ~/.gitconfig:

```
[core]
sshCommand = 'C:\\Windows\\System32\\OpenSSH\\ssh.exe'
Perhaps this will be fixed in git for Windows soon, but this is the 2nd time I've wasted time on this issue.
```

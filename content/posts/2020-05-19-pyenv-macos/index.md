---
path: /pyenv-macos
date: 2020-05-19T14:00:00.000Z
title: Python Development on macOS with pyenv
---

John asked me if I had written a blog post on getting my Mac setup with
[`pyenv`](https://github.com/pyenv/pyenv). I hadn't... so here it goes!

macOS comes with Python 2.7 out of the box. It's great for first-timers and
basic development, but as soon as you start working on more than one project you
quickly realize that your projects may (will) have conflicting dependencies. One
of those conflicting dependencies may be Python itself. How do you develop one
project in Python 2.7 and another in Python 3.6? Enter
[`pyenv`](https://github.com/pyenv/pyenv).

From the docs:

> pyenv lets you easily switch between multiple versions of Python. It's simple,
> unobtrusive, and follows the UNIX tradition of single-purpose tools that do
> one thing well.

## Installation Guide

Follow these steps to install `pyenv` on macOS. We'll be installing `pyenv` via
[Homebrew](https://brew.sh/) so make sure you have it installed.

```sh
# Install Homebrew if it isn't already available
$ /usr/bin/ruby -e "$(curl -fsSL https://raw.githubusercontent.com/Homebrew/install/master/install)"

# Install pyenv
$ brew install pyenv

# Add pyenv initializer to shell startup script
$ echo 'eval "$(pyenv init -)"' >> ~/.bash_profile

# Reload your profile
$ source ~/.bash_profile
```

---

## Usage Guide

Yay! `pyenv` is installed and functioning. Now we can install multiple versions
of Python and switch between them seamlessly.

### Install Python

```sh
$ pyenv install <python-version>
```

You can vew a full list of available versions with `pyenv install --list`. Go
ahead and install Python 3.8.2:

```sh
$ pyenv install 3.8.2
```

### Missing `zlib`?

On some versions of macOS you may encounter issues related to `zlib` not being
found.

Follow [these instructions](https://github.com/pyenv/pyenv/wiki/common-build-problems#build-failed-error-the-python-zlib-extension-was-not-compiled-missing-the-zlib)
to install.

### View Installed Versions

Now that we've installed Python 3.8.2 let's take a look at all the installed
versions available on our system:

```sh
$ pyenv versions
```

You should see `system` and `3.8.2`.

### Set Global Python

```
$ pyenv global 3.8.2
```

Now whenever you call `python` you'll be using Python 3.8.2. Check it out with
`python --version`.

### Set Local Python

To set a Python version for a specific project, `cd` into your project and then
run:

```sh
$ pyenv local <python-version>
```

That will create a `.python-version` file in the current directory which `pyenv`
will see and use to set the appropriate version.

---

## Conclusion

`pyenv` is a great tool for managing projects that depend on different versions
of Python, but it doesn't help us if we have two projects that use the same
version of Python with different versions of `pip` packages. Check out part 2:
[Python Development on macOS with pyenv-virtualenv](./pyenv-virtualenv-macos)

---
path: /pyenv-virtualenv-macos
date: 2020-05-19T15:00:00.000Z
title: Python Development on macOS with pyenv-virtualenv
---

This post is part 2. Make sure you read part 1:
[Python Development on macOS with pyenv](./pyenv-macos)

At this point you should have [`pyenv`](https://github.com/pyenv/pyenv)
installed. You can now quickly install and switch between any version of Python
that your heart desires. But what if you want to use the same version of Python
for two projects that use different versions of
[`django`](https://www.djangoproject.com/)?!

We use [`pyenv-virtualenv`](https://github.com/pyenv/pyenv-virtualenv).

From the docs:

> pyenv-virtualenv is a pyenv plugin that provides features to manage
> virtualenvs and conda environments for Python on UNIX-like systems.

---

## Installation Guide

Follow these steps to install `pyenv-virtualenv` on macOS. We'll be installing
`pyenv-virtualenv` via [Homebrew](https://brew.sh/) so make sure you have it
installed.

```sh
# Install Homebrew if it isn't already available
$ /usr/bin/ruby -e "$(curl -fsSL https://raw.githubusercontent.com/Homebrew/install/master/install)"

# Install pyenv-virtualenv
$ brew install pyenv-virtualenv

# Add pyenv-virtualenv initializer to shell startup script
$ echo 'eval "$(pyenv virtualenv-init -)"' >> ~/.bash_profile

# Reload your profile
$ source ~/.bash_profile
```

---

## Usage Guide

Yay! `pyenv-virtualenv` is installed and functioning. Now we can create virtual
environments that use the same version of Python, but have their own set of
`pip` installed packages.

### Create Virtual Environment

```sh
$ pyenv virtualenv <python-version> <name>
```

This command will create a new virtual environment with whatever name you supply
and use the specified Python version. Let's create a new virtual environment
using Python 3.8.2.

```sh
# Install Python 3.8.2
$ pyenv install 3.8.2

# Create a new virtual environment
$ pyenv virtualenv 3.8.2 django-3.0
```

This creates a new virtual environment named `django-3.0`.

### Activate Virtual Environment

Now that we've created our virtual environment, let's activate it:

```sh
$ pyenv activate django-3.0
```

We are now in our virtual environment and we can install `django==3.0`:

```sh
$ pip install django==3.0
```

This version of `django` is only available in our virtual environment and it
won't conflict with anything else!

### Just For Fun

Let's go ahead and create another virtual environment for our project that uses
`django==2.2` and see what happens.

```sh
$ pyenv virtualenv 3.8.2 django-2.2
```

Now let's activate it:

```sh
$ pyenv activate django-2.2
```

And install our desired version of `django`:

```sh
$ pip install django==2.2
```

Hot dog! We have the right version for this project and it doesn't conflict with
anything.

### Activate Environment Automatically

As long as you followed the installation instructions and included the
`eval "$(pyenv virtualenv-init -)"` line in your `~/.bash_profile`,
`pyenv-virtualenv` has the ability to automatically activate/deactivate your
environment for you.

Anytime you change directories, `pyenv` looks for a `.python-version` file and
uses the specified version or virtual environment!

`cd` into your project directory and run:

```sh
$ pyenv local django-3.0
```

Notice that you now have a `.python-version` file in your project. The next time
you `cd` into the project, `pyenv` will read this file and activate the
`django-3.0` virtual environment for you!

---

## Conclusion

Make sure to read the docs to better understand what both `pyenv` and
`pyenv-virtualenv` can do. Now go enjoy developing without dependency conflicts!

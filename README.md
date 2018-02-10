# City Scroller

## Setup

### Requirements

It is assumed that you have [Vagrant](https://www.vagrantup.com/downloads.html) and [VirtualBox](https://www.virtualbox.org/wiki/Downloads) installed on your computer.

### Starting the City Scroller Web Server

1. Checkout this repository
2. Run `vagrant up`
3. Navigate to <http://localhost:8888> in your web browser

#### Common Error

It is possible that Vagrant will not be able to forward to the default port of 8888. If you receive a message that looks like this one:

```
Vagrant cannot forward the specified ports on this VM, since they
would collide with some other application that is already listening
on these ports. The forwarded port to 8888 is already in use
on the host machine.
```

You will need to edit `Vagrantfile`.

You will need to modify thise line of code:

```
 config.vm.network "forwarded_port", guest: 80, host: 8888, host_ip: "127.0.0.1"
```

You will need to change the `host` port to something other than `8888`. After making this change, run `vagrant up` or `vagrant reload`. Then navigate to `http://localhost:XXXX` where `XXXX` is the new port number you specified.

## Editing your source code

1. You will be modifying `cityScroller.js`. Do not modify any other files.
2. The webserver generates a file called `cityScroller.pde`. If you make changes to this file, the results may be lost. Do not commit `cityScroller.pde`
3. Save and Commit often!

[Project Description](https://docs.google.com/document/d/1Vv7TAn-_sxPSjA6lv_ACV7W6QJHONLqpRuDaeFO7zgk/edit?usp=sharing)

[City Scroller Template Explanation Videos](https://chadwickschool.learning.powerschool.com/jddevaughnbrown/apcomputerscienceprinciples/cms_page/view/35614477)

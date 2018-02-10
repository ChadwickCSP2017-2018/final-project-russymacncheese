
Vagrant.configure("2") do |config|

  # You might need to set your host to something other than 8888
  # Then navigate to http://localhost:XXXX where XXXX is the host port
  config.vm.network "forwarded_port", guest: 80, host: 8888, host_ip: "127.0.0.1"
  #####################################################
  # You probably don't want to modify below this line #
  #####################################################
  
  config.vm.box = "jcbbjjttt/cityscroller"
  config.vm.synced_folder "./src", "/var/www/html"  
  
  config.vm.provision "shell", run: "always", inline: <<-SHELL
     apt-get update
     apt-get upgrade -y
     while [ $? -ne 0 ]; do
       sleep 1
       apt-get upgrade -y
     done
     
     rm -f /var/www/html/cityScroller.pde
     ln -s /var/www/html/cityScroller.js /var/www/html/cityScroller.pde

   SHELL
  
end

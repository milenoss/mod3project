class SpaceInvadersController < ApplicationController


    def index 
    
    spaceInvaders = SpaceInvaders.all 
    render json: spaceInvaders, include[:name, :lives ,:time]
    end

end

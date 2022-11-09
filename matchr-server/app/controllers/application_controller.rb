class ApplicationController < Sinatra::Base
    set :default_content_type, 'application/json'

    #Add routes: get, post, patch, delete

    get '/users' do
        users = User.all
        users.to_json
    end

    get '/inputs' do
        inputs = Input.all
        inputs.to_json
    end

    get '/messages' do
        messages = Message.all
        messages.to_json
    end

    get '/users/:id' do
        user = User.find(params[:id])

        user.to_json
    end

    post '/users' do
        user = User.create(
            first_name: params[:first_name],
            gender: params[:gender],
            age: params[:age],
            location: params[:location],
            interest_1: params[:interest_1],
            interest_2: params[:interest_2],
            interest_3: params[:interest_3],
            profile_photo_link: params[:profile_photo_link],
            email: params[:email],
            password: params[:password],
            logged_in: params[:logged_in]
        )

        user.to_json
    end

    patch '/users/:id' do
        user = User.find(params[:id])

        user.update(
            first_name: params[:first_name],
            gender: params[:gender],
            age: params[:age],
            location: params[:location],
            interest_1: params[:interest_1],
            interest_2: params[:interest_2],
            interest_3: params[:interest_3],
            profile_photo_link: params[:profile_photo_link],
            email: params[:email],
            password: params[:password],
            logged_in: params[:logged_in]
        )

        user.to_json
    end

    post '/messages' do
        message = Message.create(
            recipient: params[:recipient],
            message: params[:message]
        )

        message.to_json
    end

    post '/inputs' do
        loginInput = Input.create(
            email: params[:email],
            password: params[:password]
        )

        loginInput.to_json
    end

    delete '/inputs' do
        inputs = Input.destroy_all
        
        inputs.to_json
    end

    

end


    # example:
    # get '/messages/:id' do
    #     messages = Message.find(params[:id]) 
        
    #     messages.to_json
    #   end

    #   patch '/messages/:id' do
    #     message = Message.find(params[:id])
    
    #     message.update(
    #       body: params[:body],
    #       username: params[:username]
    #     )
    
    #     message.to_json
    #   end
    
    #   delete '/messages/:id' do
    #     message = Message.find(params[:id])
    
    #     message.destroy
    
    #     message.to_json
    #   end

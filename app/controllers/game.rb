get '/game' do

  # if session[:user_id] == nil
  # 	set_error("You must be logged in to play.")
  # 	erb :index
  if request.xhr?
    erb :game, layout: false
  else
    erb :game
  end

end
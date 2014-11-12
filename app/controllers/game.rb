get '/game' do

  if request.xhr?
    erb :game, layout: false
  else
    erb :game
  end

end
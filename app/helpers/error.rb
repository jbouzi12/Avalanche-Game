def set_error(message)
  session[:error] = message
end

def display_error
  if session[:error]
    error = session[:error]
    session[:error] = nil
    return "<div class='"'alert alert-dismissable alert-danger'"'><button type='"'button'"' class='"'close'"' data-dismiss='"'alert'"'>×</button><strong>Invalid Attempt!</strong> #{error}</div>"
  end
end
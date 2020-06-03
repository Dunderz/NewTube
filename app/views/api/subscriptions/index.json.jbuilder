@subscribers.each do |subscriber|
    json.set! subscriber.id do
        json.partial! '/api/subscriptions/subscription', subscription: subscriber
    end
end
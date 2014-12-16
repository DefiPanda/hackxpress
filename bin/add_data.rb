#!/usr/bin/env ruby
require 'net/http'
require 'net/https'
require 'uri'
require 'json'

def getParsedJSON(url, https)
  uri = URI.parse(url)
  http = Net::HTTP.new(uri.host, uri.port)
  request = Net::HTTP::Get.new(uri.request_uri)
  request.initialize_http_header({"Accept-Charset" => "utf-8"})
  if https == 0
    response = http.request(request)
  else
    response = Net::HTTP.start(uri.host, use_ssl: true, verify_mode: OpenSSL::SSL::VERIFY_NONE) do |http|
        http.get uri.request_uri, 'User-Agent' => 'MyLib v1.2'
      end
    end
  result = JSON.parse(response.body)
end

def saveQuestionOfRange(key, url, from_date, to_date)
  base_url = "#{url}questions?key=#{key}&site=programmers&order=desc&sort=votes&min=10&fromdate=#{from_date}&todate=#{to_date}"
  result = getParsedJSON(base_url, 0)["items"]
  if result
    result.each do |item|
      question_id = item["question_id"]
      answer_id = item["accepted_answer_id"]
      question_url = "#{url}questions/#{question_id}?key=#{key}&site=programmers&filter=withbody"
      answer_url = "#{url}answers/#{answer_id}?key=#{key}&site=programmers&filter=withbody"
      question_wrapper = getParsedJSON(question_url, 0)["items"]
      if question_wrapper
        question = question_wrapper[0]
        question_title = question["title"]
        question_content = question["body"]
        answer_wrapper = getParsedJSON(answer_url, 0)["items"]
        if answer_wrapper
          answer = answer_wrapper[0]
          answer_content = answer["body"]
          question = Question.where(:question_id => question_id).first_or_create
          question.update_attributes(:title => question_title, :content => question_content, :answer => answer_content, :answer_id => answer_id)
        end
      end
    end
  end
end

key = "PYJCzFudsJiDZYpwTeEitQ(("
url = "http://api.stackexchange.com/2.2/"
start = 1284595200
current = 1293839000
while start < current do
  puts Time.at(start)
  saveQuestionOfRange(key, url, start, start + 604800)
  start += 604800
  sleep 30
end


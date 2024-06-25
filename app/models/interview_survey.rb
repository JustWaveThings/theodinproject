class InterviewSurvey < ApplicationRecord
  validates :name, presence: true
  validates :test, presence: true
end

/*
  # Create skills table for skill trading platform

  1. New Tables
    - `skills`
      - `id` (uuid, primary key)
      - `name` (text) - User's name
      - `skill_offered` (text) - Skill they want to offer
      - `skill_needed` (text) - Skill they need in return
      - `location` (text) - City/location
      - `description` (text) - Detailed description
      - `created_at` (timestamp)

  2. Security
    - Enable RLS on `skills` table
    - Add policy for public read access (anyone can browse skills)
    - Add policy for public insert access (anyone can post skills)
*/

CREATE TABLE IF NOT EXISTS skills (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  name text NOT NULL,
  skill_offered text NOT NULL,
  skill_needed text NOT NULL,
  location text NOT NULL,
  description text NOT NULL,
  created_at timestamptz DEFAULT now()
);

ALTER TABLE skills ENABLE ROW LEVEL SECURITY;

-- Allow public read access for browsing skills
CREATE POLICY "Anyone can read skills"
  ON skills
  FOR SELECT
  TO public
  USING (true);

-- Allow public insert access for posting skills
CREATE POLICY "Anyone can insert skills"
  ON skills
  FOR INSERT
  TO public
  WITH CHECK (true);
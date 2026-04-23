-- Add deadline tracking
ALTER TABLE clubs ADD COLUMN IF NOT EXISTS deadline DATE;
ALTER TABLE clubs ADD COLUMN IF NOT EXISTS deadline_label TEXT;

-- Add data freshness timestamp
ALTER TABLE clubs ADD COLUMN IF NOT EXISTS updated_at TIMESTAMPTZ DEFAULT NOW();

-- Add transfer-friendly flag
ALTER TABLE clubs ADD COLUMN IF NOT EXISTS transfer_friendly BOOLEAN DEFAULT FALSE;

-- Trigger to auto-update updated_at on row change
CREATE OR REPLACE FUNCTION update_updated_at()
RETURNS TRIGGER AS $$
BEGIN NEW.updated_at = NOW(); RETURN NEW; END;
$$ LANGUAGE plpgsql;

DROP TRIGGER IF EXISTS clubs_updated_at ON clubs;
CREATE TRIGGER clubs_updated_at
BEFORE UPDATE ON clubs
FOR EACH ROW EXECUTE FUNCTION update_updated_at();

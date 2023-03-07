
--------------------------------------------------------------------------------
-------------------------- POST
--------------------------------------------------------------------------------
---- CASO CREATE 
--------------------------------------------------------------------------------

CREATE OR REPLACE FUNCTION  post_log_insert_function()
  RETURNS TRIGGER 
  AS
$$
BEGIN
INSERT INTO logs (id, "userId","method", table_name)
	VALUES (new.id,new.user_id,'insert','post');
	RETURN NEW;
END;
$$ language plpgsql;



create trigger log_post_insert
 after insert on post  
for each row execute  procedure  post_log_insert_function();

--------------------------------------------------------------------------------
-- CASO UPDATE
--------------------------------------------------------------------------------

CREATE OR REPLACE FUNCTION  post_log_update_function()
  RETURNS TRIGGER 
  AS
$$
BEGIN
INSERT INTO logs (id, "userId","method",table_name)
	VALUES (new.id,new.user_id,'UPDATE','post');
	RETURN NEW;
END;
$$ language plpgsql;


create trigger log_post_update 
 after update on "post"  
for each row execute  procedure  post_log_update_function();

--------------------------------------------------------------------------------
-- CASO DELETE
--------------------------------------------------------------------------------

CREATE OR REPLACE FUNCTION  post_log_delete_function()
  RETURNS TRIGGER 
  AS
$$
BEGIN
INSERT INTO logs (id, "userId","method",table_name)
	VALUES (new.id,new.user_id,'Delete','post');
	RETURN NEW;
END;
$$ language plpgsql;

create trigger log_post_delete
 after delete on "post"  
for each row execute  procedure  post_log_delete_function();

--------------------------------------------------------------------------------

--------------------------------------------------------------------------------
-------------------------- GROUP
--------------------------------------------------------------------------------
---- CASO CREATE 
--------------------------------------------------------------------------------

CREATE OR REPLACE FUNCTION  group_log_insert_function()
  RETURNS TRIGGER 
  AS
$$
BEGIN
INSERT INTO public.logs (id, "userId","method", table_name)
	VALUES (new.id,new.user_id,'insert','group');
	RETURN NEW;
END;
$$ language plpgsql;



create trigger log_group_insert
 after insert on "group"  
for each row execute  procedure  group_log_insert_function();

--------------------------------------------------------------------------------
-- CASO UPDATE
--------------------------------------------------------------------------------

CREATE OR REPLACE FUNCTION  group_log_update_function()
  RETURNS TRIGGER 
  AS
$$
BEGIN
INSERT INTO public.logs (id, "userId","method",table_name)
	VALUES (new.id,new.user_id,'UPDATE','group');
	RETURN NEW;
END;
$$ language plpgsql;


create trigger log_group_update 
 after update on "group"  
for each row execute  procedure  group_log_update_function();

--------------------------------------------------------------------------------
-- CASO DELETE
--------------------------------------------------------------------------------

CREATE OR REPLACE FUNCTION  group_log_delete_function()
  RETURNS TRIGGER 
  AS
$$
BEGIN
INSERT INTO public.logs (id, "userId","method",table_name)
	VALUES (new.id,new.user_id,'Delete','group');
	RETURN NEW;
END;
$$ language plpgsql;

create trigger log_group_delete
 after delete on "group"  
for each row execute  procedure  group_log_delete_function();

--------------------------------------------------------------------------------